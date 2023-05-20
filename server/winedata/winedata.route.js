// index.js
import express from 'express'
import {getAllWines, getWine } from './winedata.controler.js'

export const winedataRouter = express.Router();

// middleware specific to this route
winedataRouter.use(express.json())

// route handlers
winedataRouter.get("/winedata", getAllWines);
winedataRouter.get("/winedata/:id", getWine);