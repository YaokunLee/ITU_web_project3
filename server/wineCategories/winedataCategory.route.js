// index.js
import express from 'express'
import {getWineByCategory, getWineByCountry, getWineByVintage, getWineByPriceRange, getAllCategories} from './winedataCategory.controler.js'

export const winedataCategoryRouter = express.Router();

// middleware specific to this route
winedataCategoryRouter.use(express.json())

// route handlers
winedataCategoryRouter.get("/winedatacategory/:type", getWineByCategory);
winedataCategoryRouter.get("/winedataorigin/:country", getWineByCountry);
winedataCategoryRouter.get("/winedatayear/:vintage", getWineByVintage);
winedataCategoryRouter.get("/winedataprice/:price", getWineByPriceRange);
winedataCategoryRouter.get("/winedatacategories", getAllCategories);
