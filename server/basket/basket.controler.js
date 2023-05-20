import * as wineModel from "./basket.model.js";


export async function getBasketByUserName(req, res) {
  try {
    let name = req.params.name.toString()
    let customer = await wineModel.getBasketByUserName(name);
    res.json(customer);
  } catch (error) {
    // res.statusMessage=
    res.status(400).send(error.message);
  }
}

export async function updateBasketByUserName(req, res) {
  try {
    let name = req.body.name;
    let newBasket = req.body.new_basket;
    let basketAfterUpdated = await wineModel.updateBasketByUserName(name, newBasket);
    res.json(basketAfterUpdated).send();
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function updateOneItemInBasket(req, res) {
  try {
    let info = req.body;
    let userName = info.name;
    let itemInfo = info.itemInfo;
    let newBasket = await wineModel.updateOneItemInBasket(userName, itemInfo);
    res.json(newBasket).send();
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function deleteOneItemInBasket(req, res) {
  try {
    let info = req.body;
    let userName = info.name;
    let wineId = info.wine_id;
    let newBasket = await wineModel.deleteOneItemInBasket(userName, wineId);
    res.json(newBasket).send();
  } catch (error) {
    res.status(400).send(error.message);
  }
}


