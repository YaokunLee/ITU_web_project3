import * as userModel from "./user.model.js";


export async function getUserByName(req, res) {
  try {
    let name = req.params.name
    let user = await userModel.getUserByName(name);
    res.json(user);
  } catch (error) {
    // res.statusMessage=
    res.status(400).send(error.message);
  }
}

export async function addOneUser(req, res) {
  try {
    let newUserInfo = req.body
    let user = await userModel.addOneUser(newUserInfo);
    res.json(user).send();
  } catch (error) {
    res.status(400).send(error.message);
  }
}

