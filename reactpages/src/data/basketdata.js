
const basket_map_id = "basketMap";


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

  