"use strict";
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const connectDB = require("./config/db");

app.use(express.json());
connectDB();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Server running");
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT: http://localhost:${PORT}`);
});
