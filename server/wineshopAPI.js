import express from "express";
import cors from "cors";
import {winedataRouter} from "./winedata/winedata.route.js";
import {basketRouter} from "./basket/basket.route.js";
import {userRouter} from "./user/user.route.js";
import {winedataCategoryRouter} from "./wineCategories/winedataCategory.route.js";

const app = express();
const PORT = 3000;


// This is a built-in middleware function in Express. It parses incoming requests with JSON payloads.
app.use(express.json());

app.use(cors());


// paths handled by quizzesRouter
app.use(winedataRouter)
app.use(basketRouter)
app.use(userRouter)
app.use(winedataCategoryRouter)
app.get("/", (req, res) => res.send("Server 3: Hello World!"));


// For invalid routes
app.get("*", (req, res) => {
    res.send("404! This is an invalid URL.");
});

app.listen(PORT, function (err) {
    if (err) console.log("Error in server setup");
    console.log("Server listening on Port", PORT);
});
