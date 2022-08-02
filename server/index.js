require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3045;

app.use(express.json());
app.use(cors());

app.listen(port, () => console.log(`SERVER RUNNING ON PORT:${port}`));
