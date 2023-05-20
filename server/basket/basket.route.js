// index.js
import express from 'express'
import { getBasketByUserName,updateBasketByUserName, updateOneItemInBasket, deleteOneItemInBasket } from './basket.controler.js'

export const basketRouter = express.Router();

// middleware specific to this route
basketRouter.use(express.json())

// route handlers
basketRouter.get("/basket/:name", getBasketByUserName);
basketRouter.put("/basket/updateAllItems", updateBasketByUserName);
basketRouter.put("/basket/updateOneItem", updateOneItemInBasket);
basketRouter.delete("/basket/deleteOneItem", deleteOneItemInBasket);