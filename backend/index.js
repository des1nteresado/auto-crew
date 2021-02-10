import express from "express";

import config from "./config";

import "./db";

const app = express();
const router = express.Router();

app.use(express.json());

router.get("/ping", (req, res) => {
    res.json({ message: "pong" });
});

app.use(router);

app.listen(config.PORT, () => {
    console.log(`> Ready on http://localhost:${config.PORT}`);
});
