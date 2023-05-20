const wineShop = [
  {
    name: "Chateau de la Lune",
    region: "Bordeaux",
    country: "France",
    type:"Champagne",
    brand:"Château de la Belle Vue",
    vintage: 2015,
    price: 19.99,
    details: "This Champagne has a bright, golden color with aromas of freshly baked bread and ripe fruit. On the palate, it is rich and complex with flavors of citrus, green apple, and a hint of honey. The finish is long and elegant, with a refreshing acidity that lingers on the tongue."
  },
  {
    name: "Luminous Blanc",
    region: "Napa Valley",
    country: "USA",
    type:"White",
    brand:"Coastal Vines Winery",
    vintage: 2016,
    price: 29.99,
    details: "Luminous Blanc is a crisp and refreshing white wine made from 100% Chardonnay grapes grown in the sun-drenched vineyards of California. The wine has a pale straw color and aromas of fresh citrus, green apple, and tropical fruit. On the palate, it is vibrant and well-balanced with flavors of lemon zest, ripe peach, and a hint of vanilla. The wine finishes with a bright acidity and a clean, lingering aftertaste.Food Pairings: Luminous Blanc pairs perfectly with seafood dishes like grilled shrimp, scallops, and lobster. It also pairs well with light salads, roasted vegetables, and creamy pasta dishes. Serve chilled at 45-50°F for optimal enjoyment."
  },
  {
    name: "Barcelona Blanca",
    region: "Ribera del Duero",
    country: "Spain",
    type:"White",
    brand:"Bodega del Sol",
    vintage: 2011,
    price: 39.99,
    details: "Barcelona Blanca is a bright and fresh white wine made from a blend of traditional grape varieties grown in the hills surrounding Barcelona. The wine has a pale straw color with aromas of green apple, pear, and a hint of honey. On the palate, it is crisp and lively with flavors of citrus, white peach, and a touch of minerality. The wine finishes with a clean and refreshing acidity."
  },
  {
    name: "Villa Rosa",
    region: "Tuscany",
    country: "Italy",
    type:"Rosé",
    brand:"Bellavista Vineyards",
    vintage: 2016,
    price: 29.99,
    details:"Villa Rosa Rosé is a delicate and elegant wine made from 100% Sangiovese grapes grown in the rolling hills of Tuscany. The wine has a pale pink color with aromas of fresh strawberries, raspberries, and a hint of rose petals. On the palate, it is crisp and refreshing with flavors of red fruit, citrus, and a touch of minerality. The wine finishes with a bright acidity and a lingering aftertaste."
  },
  {
    name: "Rosé de Reims",
    region: "Bordeaux",
    country: "France",
    type:"Champagne",
    brand:"La Maison des Vignes",
    vintage: 2015,
    price: 49.99,
    details: "Champagne Rosé de Reims is a refined and elegant sparkling wine made from a blend of Pinot Noir, Chardonnay, and Pinot Meunier grapes grown in the world-renowned Champagne region. The wine has a delicate salmon pink color with aromas of red fruit, strawberry, and a hint of brioche. On the palate, it is well-balanced with flavors of raspberry, peach, and a touch of spice. The wine finishes with a fine and persistent mousse and a long, refreshing acidity."
  },
  {
    name: "Celestial Bubbles",
    region: "Napa Valley",
    country: "USA",
    type:"Champagne",
    brand:"Redwood Cellars",
    vintage: 2016,
    price: 49.99,
    details:"Celestial Bubbles is a delightful sparkling wine made in the traditional Champagne method from a blend of Chardonnay and Pinot Noir grapes grown in the sun-drenched vineyards of California. The wine has a pale straw color with aromas of green apple, pear, and a hint of vanilla. On the palate, it is crisp and refreshing with flavors of citrus, white peach, and a touch of toastiness. The wine finishes with a fine and persistent mousse and a clean, refreshing acidity."
  },
  {
    name: "Sangria Sunset",
    region: "Ribera del Duero",
    country: "Spain",
    type:"Red",
    brand:"Cava del Rey",
    vintage: 2011,
    price: 49.99,
    details:"Sangria Sunset is a fruity and refreshing red wine made from a blend of Tempranillo, Garnacha, Bobal, and Monastrell grapes grown in the sunny vineyards of Valencia. The wine has a deep ruby color with aromas of ripe red fruit, blackberry, and a hint of spice. On the palate, it is smooth and juicy with flavors of cherry, raspberry, and a touch of cinnamon. The wine finishes with a light sweetness and a subtle acidity."
  },
  {
    name: "Sorrento Verde",
    region: "Tuscany",
    country: "Italy",
    type:"White",
    brand:"La Strada del Vino",
    vintage: 2016,
    price: 39.99,
    details:"Sorrento Verde is a fresh and crisp white wine made from 100% Falanghina grapes grown in the beautiful region of Campania in southern Italy. The wine has a pale straw color with aromas of green apple, lemon, and a hint of white flowers. On the palate, it is zesty and vibrant with flavors of citrus, pear, and a touch of minerality. The wine finishes with a bright acidity and a long, refreshing aftertaste."
  },
  {
    name: "Provence Pink",
    region: "Bordeaux",
    country: "France",
    type:"Rosé",
    brand:"Domaine de la Roche",
    vintage: 2015,
    price: 49.99,
    details:"Provence Pink is a delicate and refreshing rosé wine made from a blend of Grenache, Cinsault, and Syrah grapes grown in the picturesque vineyards of Provence. The wine has a beautiful pale pink color with aromas of fresh red fruit, peach, and a hint of citrus. On the palate, it is light and crisp with flavors of strawberry, raspberry, and a touch of minerality. The wine finishes with a bright acidity and a clean, refreshing aftertaste."
  },
  {
    name: "Napa Noir",
    region: "Napa Valley",
    country: "USA",
    type:"Red",
    brand:"Sonoma Hills Vineyard",
    vintage: 2016,
    price: 59.99,
    details:"Napa Noir is a full-bodied and elegant red wine made from a blend of Cabernet Sauvignon, Merlot, and Cabernet Franc grapes grown in the world-renowned Napa Valley region of California. The wine has a deep ruby color with aromas of dark fruit, black cherry, and a hint of vanilla. On the palate, it is complex and rich with flavors of blackberry, cassis, and a touch of tobacco. The wine finishes with silky tannins and a long, lingering aftertaste."
  },
  {
    name: "Marbella Blush",
    region: "Ribera del Duero",
    country: "Spain",
    type:"Rosé",
    brand:"Rioja Real Vineyards",
    vintage: 2011,
    price: 49.99,
    details:"Marbella Blush is a vibrant and fruity rosé wine made from a blend of Tempranillo and Bobal grapes grown in the sunny vineyards of Andalusia. The wine has a beautiful coral pink color with aromas of red berries, watermelon, and a hint of citrus. On the palate, it is crisp and refreshing with flavors of strawberry, raspberry, and a touch of floral notes. The wine finishes with a lively acidity and a long, pleasant aftertaste."
  },
  {
    name: "Sicilian Sunset",
    region: "Tuscany",
    country: "Italy",
    type:"Red",
    brand:"Montepulciano Estate",
    vintage: 2016,
    price: 39.99,
    details:"Sicilian Sunset is a rich and robust red wine made from the Nero d'Avola grape, grown in the sunny vineyards of Sicily. The wine has a deep ruby color with aromas of ripe black fruit, blackberry, and a hint of vanilla. On the palate, it is full-bodied and flavorful with notes of black cherry, plum, and a touch of spice. The wine finishes with firm tannins and a long, lingering aftertaste."
  }
];

function getWineInfo(i) {
  if (i < 0 || i >= wineShop.length) {
    return "Invalid index";
  }
  return wineShop[i];
}


function addProductDetailInfo() {
	product = getWineInfo( localStorage.getItem("current_product_detail_page_num") - 1);
	document.getElementById("wine_name").innerText = product.name;
	document.getElementById("wine_price").innerText = "$" + product.price;
	document.getElementById("wine_type").innerText = product.type;
	document.getElementById("wine_country").innerText = product.country;
	document.getElementById("wine_year").innerText = product.vintage;
	document.getElementById("wine_brand").innerText = product.brand;
	document.getElementById("wine_image").src = "img/wine_" + localStorage.getItem("current_product_detail_page_num") + ".png";
}
function addProductDetailsInfo(){
  document.getElementById("wine_details").innerHTML = product.details;
}

async function addAllHomepageProductInfo() {
  let i = 1;
  const response = await fetch('http://localhost:3000/winedata');
  const winedata = await response.json();

  winedata.forEach(element => {
    addHomepageProductInfo(element, i);
    i = i + 1;
  });
}
function addCountryProductInfo(country) {
  var i = 1;
  wineShop.filter(wine => wine.country === country)
          .forEach(element =>  {
            addHomepageProductInfo(element, i);
            i = i + 1;
        })
}

function addHomepageProductInfo(product, i) {
	document.getElementById("product_"+ i + "_wine_name").innerText = product.name;
	document.getElementById("product_"+ i + "_wine_type").innerText = product.type + " wine";
	document.getElementById("product_"+ i + "_wine_from").innerText = "from " + product.country;
	/*document.getElementById("product_"+ i + "_wine_country").innerText = product.country;*/
	document.getElementById("product_"+ i + "_wine_price").innerText = product.price + " $";
	// document.getElementById("wine_image").src = "img/wine_" + (i + 1) + ".webp";
}

function onClickAddtoBasket2(price, n , name) {
	var basketItemsMap = getBasketMap()
	
	var num = n 
	var totalPrice = price * num;

	var originNum = basketItemsMap.get(name);
	if (originNum != null && originNum !== undefined) {
		num = num + originNum.num
		totalPrice = price * num
	}

	basketItemsMap.set(name, {
		num: num,
		price:"$" + price,
		name : name,
		totalPrice: "$" + totalPrice 
	})
	saveBasketMap(basketItemsMap);
	alert("Add to basket successfully!");
  }

function addItemtoBasketById(i) {
  var wineInfo = getWineInfo(i-1)
	onClickAddtoBasket2(wineInfo.price, 1 , wineInfo.name)
}

function setCurrentProductDetailPage(i) {
  localStorage.setItem("current_product_detail_page_num", i);
}

function changeColor(){ //for later use

  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Change the color of the clicked button to red
      btn.style.color = "#756e62";
  
      // Reset the color of the other buttons
      filterBtns.forEach(otherBtn => {
        if (otherBtn !== btn) {
          otherBtn.style.color = '';
        }
      });
    });
  });
  

}



