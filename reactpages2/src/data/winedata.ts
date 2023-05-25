
export interface Wine {
  id: number;
  name: string;
  region: string;
  country: string;
  type: string;
  brand: string;
  imgSrc: string;
  vintage: number;
  price: number;
  details: string;
}

const wineShop: Wine[] = [
  {
    id: 0,
    name: "Chateau de la Lune",
    region: "Bordeaux",
    country: "France",
    type: "Champagne",
    brand: "Château de la Belle Vue",
    imgSrc: "/img/wine_1.png",
    vintage: 2015,
    price: 19.99,
    details: "This Champagne has a bright, golden color with aromas of freshly baked bread and ripe fruit. On the palate, it is rich and complex with flavors of citrus, green apple, and a hint of honey. The finish is long and elegant, with a refreshing acidity that lingers on the tongue."
  },
  {
    id:1,
    name: "Luminous Blanc",
    region: "Napa Valley",
    country: "USA",
    type:"White",
    brand:"Coastal Vines Winery",
    imgSrc:"/img/wine_2.png",
    vintage: 2016,
    price: 29.99,
    details: "Luminous Blanc is a crisp and refreshing white wine made from 100% Chardonnay grapes grown in the sun-drenched vineyards of California. The wine has a pale straw color and aromas of fresh citrus, green apple, and tropical fruit. On the palate, it is vibrant and well-balanced with flavors of lemon zest, ripe peach, and a hint of vanilla. The wine finishes with a bright acidity and a clean, lingering aftertaste.Food Pairings: Luminous Blanc pairs perfectly with seafood dishes like grilled shrimp, scallops, and lobster. It also pairs well with light salads, roasted vegetables, and creamy pasta dishes. Serve chilled at 45-50°F for optimal enjoyment."
  },
  {
    id:2,
    name: "Barcelona Blanca",
    region: "Ribera del Duero",
    country: "Spain",
    type:"White",
    brand:"Bodega del Sol",
    imgSrc:"/img/wine_3.png",
    vintage: 2011,
    price: 39.99,
    details: "Barcelona Blanca is a bright and fresh white wine made from a blend of traditional grape varieties grown in the hills surrounding Barcelona. The wine has a pale straw color with aromas of green apple, pear, and a hint of honey. On the palate, it is crisp and lively with flavors of citrus, white peach, and a touch of minerality. The wine finishes with a clean and refreshing acidity."
  },
  {
    id:3,
    name: "Villa Rosa",
    region: "Tuscany",
    country: "Italy",
    type:"Rosé",
    brand:"Bellavista Vineyards",
    imgSrc:"/img/wine_4.png",
    vintage: 2016,
    price: 29.99,
    details:"Villa Rosa Rosé is a delicate and elegant wine made from 100% Sangiovese grapes grown in the rolling hills of Tuscany. The wine has a pale pink color with aromas of fresh strawberries, raspberries, and a hint of rose petals. On the palate, it is crisp and refreshing with flavors of red fruit, citrus, and a touch of minerality. The wine finishes with a bright acidity and a lingering aftertaste."
  },
  {
    id:4,
    name: "Rosé de Reims",
    region: "Bordeaux",
    country: "France",
    type:"Champagne",
    brand:"La Maison des Vignes",
    imgSrc:"/img/wine_5.png",
    vintage: 2015,
    price: 49.99,
    details: "Champagne Rosé de Reims is a refined and elegant sparkling wine made from a blend of Pinot Noir, Chardonnay, and Pinot Meunier grapes grown in the world-renowned Champagne region. The wine has a delicate salmon pink color with aromas of red fruit, strawberry, and a hint of brioche. On the palate, it is well-balanced with flavors of raspberry, peach, and a touch of spice. The wine finishes with a fine and persistent mousse and a long, refreshing acidity."
  },
  {
    id:5,
    name: "Celestial Bubbles",
    region: "Napa Valley",
    country: "USA",
    type:"Champagne",
    brand:"Redwood Cellars",
    imgSrc:"/img/wine_6.png",
    vintage: 2016,
    price: 49.99,
    details:"Celestial Bubbles is a delightful sparkling wine made in the traditional Champagne method from a blend of Chardonnay and Pinot Noir grapes grown in the sun-drenched vineyards of California. The wine has a pale straw color with aromas of green apple, pear, and a hint of vanilla. On the palate, it is crisp and refreshing with flavors of citrus, white peach, and a touch of toastiness. The wine finishes with a fine and persistent mousse and a clean, refreshing acidity."
  },
  {
    id:6,
    name: "Sangria Sunset",
    region: "Ribera del Duero",
    country: "Spain",
    type:"Red",
    brand:"Cava del Rey",
    imgSrc:"/img/wine_7.png",
    vintage: 2011,
    price: 49.99,
    details:"Sangria Sunset is a fruity and refreshing red wine made from a blend of Tempranillo, Garnacha, Bobal, and Monastrell grapes grown in the sunny vineyards of Valencia. The wine has a deep ruby color with aromas of ripe red fruit, blackberry, and a hint of spice. On the palate, it is smooth and juicy with flavors of cherry, raspberry, and a touch of cinnamon. The wine finishes with a light sweetness and a subtle acidity."
  },
  {
    id:7,
    name: "Sorrento Verde",
    region: "Tuscany",
    country: "Italy",
    type:"White",
    brand:"La Strada del Vino",
    imgSrc:"/img/wine_8.png",
    vintage: 2016,
    price: 39.99,
    details:"Sorrento Verde is a fresh and crisp white wine made from 100% Falanghina grapes grown in the beautiful region of Campania in southern Italy. The wine has a pale straw color with aromas of green apple, lemon, and a hint of white flowers. On the palate, it is zesty and vibrant with flavors of citrus, pear, and a touch of minerality. The wine finishes with a bright acidity and a long, refreshing aftertaste."
  },
  {
    id:8,
    name: "Provence Pink",
    region: "Bordeaux",
    country: "France",
    type:"Rosé",
    brand:"Domaine de la Roche",
    imgSrc:"/img/wine_9.png",
    vintage: 2015,
    price: 49.99,
    details:"Provence Pink is a delicate and refreshing rosé wine made from a blend of Grenache, Cinsault, and Syrah grapes grown in the picturesque vineyards of Provence. The wine has a beautiful pale pink color with aromas of fresh red fruit, peach, and a hint of citrus. On the palate, it is light and crisp with flavors of strawberry, raspberry, and a touch of minerality. The wine finishes with a bright acidity and a clean, refreshing aftertaste."
  },
  {
    id:9,
    name: "Napa Noir",
    region: "Napa Valley",
    country: "USA",
    type:"Red",
    brand:"Sonoma Hills Vineyard",
    imgSrc:"/img/wine_10.png",
    vintage: 2016,
    price: 59.99,
    details:"Napa Noir is a full-bodied and elegant red wine made from a blend of Cabernet Sauvignon, Merlot, and Cabernet Franc grapes grown in the world-renowned Napa Valley region of California. The wine has a deep ruby color with aromas of dark fruit, black cherry, and a hint of vanilla. On the palate, it is complex and rich with flavors of blackberry, cassis, and a touch of tobacco. The wine finishes with silky tannins and a long, lingering aftertaste."
  },
  {
    id:10,
    name: "Marbella Blush",
    region: "Ribera del Duero",
    country: "Spain",
    type:"Rosé",
    brand:"Rioja Real Vineyards",
    imgSrc:"/img/wine_11.png",
    vintage: 2011,
    price: 49.99,
    details:"Marbella Blush is a vibrant and fruity rosé wine made from a blend of Tempranillo and Bobal grapes grown in the sunny vineyards of Andalusia. The wine has a beautiful coral pink color with aromas of red berries, watermelon, and a hint of citrus. On the palate, it is crisp and refreshing with flavors of strawberry, raspberry, and a touch of floral notes. The wine finishes with a lively acidity and a long, pleasant aftertaste."
  },
  {
    id:11,
    name: "Sicilian Sunset",
    region: "Tuscany",
    country: "Italy",
    type:"Red",
    brand:"Montepulciano Estate",
    imgSrc:"/img/wine_12.png",
    vintage: 2016,
    price: 39.99,
    details:"Sicilian Sunset is a rich and robust red wine made from the Nero d'Avola grape, grown in the sunny vineyards of Sicily. The wine has a deep ruby color with aromas of ripe black fruit, blackberry, and a hint of vanilla. On the palate, it is full-bodied and flavorful with notes of black cherry, plum, and a touch of spice. The wine finishes with firm tannins and a long, lingering aftertaste."
  }
];

export default wineShop;

export function getWineInfo(id: number): Wine {
  return wineShop[id];
}

export function getAllWineInfo(): Wine[] {
  return wineShop;
}

export function addProductDetailInfo(id: number): Wine | string {
  return getWineInfo(id);
}
