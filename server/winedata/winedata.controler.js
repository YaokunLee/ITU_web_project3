import * as wineModel from "./winedata.model.js";

export async function getAllWines(req, res) {
    try {
        let allWine = await wineModel.getAll();
        res.json(allWine);
    } catch (error) {
      // res.statusMessage=
      res.status(400).send(error.message);
    }
  }

export async function getWine (req, res) {
  try {
    let id = parseInt(req.params.id)
    let customer = await wineModel.getByID(id);
    res.json(customer);
  } catch (error) {
    // res.statusMessage=
    res.status(400).send(error.message);
  }
}