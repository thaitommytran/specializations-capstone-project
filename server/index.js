require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { addAccount, getAccounts, deleteAccount } = require("./controller");

const app = express();
const port = process.env.PORT || 3045;

app.use(express.json());
app.use(cors());

app.post("/accounts", addAccount);
app.get("/accounts", getAccounts);
app.post("/accounts/delete/:account_id", deleteAccount);

app.listen(port, () => console.log(`SERVER RUNNING ON PORT:${port}`));
