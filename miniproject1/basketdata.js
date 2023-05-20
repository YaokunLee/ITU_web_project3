
const basket_map_id = "basketMap";

function addOneBasketItem(goodsData) {
  var newElement = document.createElement("div");
    var s = '<div class="container text-align:center">' +
        '<div class="row">' +
            '<div class="col-md-1"> </div>' +
            '<div class="col-md-3" id="basket_wine_name">   <h4>' + goodsData.name + '</h4> </div>' +
            '<div class="col-md-1" id="basket_wine_num"> <h4>' + goodsData.num + '</h4> </div>' +
            // '<div class="col-md-2" id="basket_wine_price"> <h4 class="col-md-3">' + goodsData.price + '</h4> </div>' +
            '<div class="col-md-2" id="basket_wine_total_price"> <h4>' + goodsData.totalPrice + ' </h4> </div>' +
            '<img class="col-md-2" id="basket_wine_remove" src="img/icon_trash_black.png" onclick="removeBasketItem(\'' +  goodsData.name + '\')">' +
            '<div class="col-md-1"> </div>' +
            '<hr style="margin-top: 10px;">' +
        '</div>'
  newElement.innerHTML = s;
  const parentElement = document.getElementById("basket_list_items_container");
  parentElement.appendChild(newElement);
}


function removeBasketItem() {
	console.log("afeawfwaefawefewa")
}

function removeBasketItem(name) {
	onClickDeleteInBasket(name)
	const parentElement = document.getElementById("basket_list_items_container");
	const grandParentElement = document.getElementById("basket_list_container");
	grandParentElement.removeChild(parentElement);
	var newElement = document.createElement("div");
	newElement.id = "basket_list_items_container";
	grandParentElement.appendChild(newElement);
	addAllBasketItem();
}

function addAllBasketItem() {
	var basketItemsMap = getBasketMap(); 
	if (basketItemsMap instanceof Map) {
		for (const value of basketItemsMap.values()) {
			addOneBasketItem(value);
		}
	}
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

function saveBasketMap(map) {
	const jsonStr = JSON.stringify(Array.from(map.entries()))
	localStorage.setItem(basket_map_id, jsonStr)
}

function getBasketMap() {
	// 从localStorage中获取JSON字符串
	const jsonStr = localStorage.getItem(basket_map_id)
	if (jsonStr == null || jsonStr === undefined) {
		return new Map();
	}
	const entries = JSON.parse(jsonStr)
	return new Map(entries)
}

  