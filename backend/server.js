import express from "express";

import config from "./config";
import router from "./router";

import "./db";

const app = express();

app.use(express.json());

app.use(config.API_PREFIX, router);

app.listen(config.PORT, () => {
    console.log(`> Ready on http://localhost:${config.PORT}`);
});
