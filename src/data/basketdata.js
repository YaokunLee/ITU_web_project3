
const basket_map_id = "basketMap";

export function getBasketList() {
	let results = [];
	let basketItemsMap = getBasketMap();
	if (basketItemsMap instanceof Map) {
		for (const value of basketItemsMap.values()) {
			results.push(value);
		}
	}
	return results;
}

function fromPriceToNum(s) {
	return Number(s
	.replace("$", "")
	.replace("dkk", "")
	.replace("DKK","")
	.replace("Dkk",""));
}

function onClickAddtoBasket() {
	var basketItemsMap = getBasketMap()
	
	var price = fromPriceToNum(document.getElementById("wine_price").innerText)
	var num = fromPriceToNum(document.getElementById("wine_num").value); 
	var name = document.getElementById("wine_name").innerText;
	var totalPrice = price * num;

	var originNum = basketItemsMap.get(name);
	if (originNum != null && originNum !== undefined) {
		num = num + originNum.num
		totalPrice = price * num
	}

	basketItemsMap.set(name, {
		num: num,
		price: "$" + price,
		name : name,
		totalPrice: "$" + totalPrice 
	})
	saveBasketMap(basketItemsMap);
	alert("Add to basket successfully!");
  }
  
  
function onClickDeleteInBasket(name) {
	var basketItemsMap = getBasketMap();
	if (basketItemsMap == null || basketItemsMap === undefined) {
		return;
	}
	basketItemsMap.delete(name);
	saveBasketMap(basketItemsMap);
  }

export function saveBasketMap(map) {
	const jsonStr = JSON.stringify(Array.from(map.entries()))
	localStorage.setItem(basket_map_id, jsonStr)
}

export function getBasketMap() {
	// 从localStorage中获取JSON字符串
	const jsonStr = localStorage.getItem(basket_map_id)
	if (jsonStr == null || jsonStr === undefined) {
		return new Map();
	}
	const entries = JSON.parse(jsonStr)
	return new Map(entries)
}

  