import * as wineModel from "./winedataCategory.model.js";

export async function getWineByCategory (req, res) {
  try {
    let type = req.params.type
    let wine = await wineModel.getWineByType(type);
    res.json(wine).send();
  } catch (error) {
    // res.statusMessage=
    res.status(400).send(error.message);
  }
}

export async function getWineByCountry (req, res) {
  try {
    let country = req.params.country
    let wineByOrigin = await wineModel.getWineByOrigin(country);
    res.json(wineByOrigin).send();
  } catch (error) {
    // res.statusMessage=
    res.status(400).send(error.message);
  }
}

export async function getWineByVintage (req, res) {
  try {
    let vintage = req.params.vintage
    let WineByYear = await wineModel.getWineByYear(vintage);
    res.json(WineByYear).send();
  } catch (error) {
    // res.statusMessage=
    res.status(400).send(error.message);
  }
}

//get wines by providing maximum price
export async function getWineByPriceRange(req, res) {
  try {
    let maxPrice = req.params.price; // parse maxPrice as a float
    let wineByPrice = await wineModel.getWineByPrice(maxPrice);
    res.json(wineByPrice);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

//categories
export async function getAllCategories(req, res) {
  try {
    let categories = {};
    let wineData = await wineModel.getAll();
    
    // Get all unique prices
    categories.prices = [...new Set(wineData.map(wine => wine.price))];
    
    // Get all unique countries
    categories.countries = [...new Set(wineData.map(wine => wine.country))];
    
    // Get all unique types
    categories.types = [...new Set(wineData.map(wine => wine.type))];
    
    // Get all unique vintages
    categories.vintages = [...new Set(wineData.map(wine => wine.vintage))];

    res.json(categories);
  } catch (error) {
    res.status(400).send(error.message);
  }
}