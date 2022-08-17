require("dotenv").config();
const express = require("express");
const cors = require("cors");
const {
  addAccount,
  getAccounts,
  deleteAccount,
  authUser,
  createUser,
  getUser
} = require("./controller");

const app = express();
const port = process.env.PORT || 3045;

app.use(express.json());
app.use(cors());

app.post("/:user_id/accounts", addAccount);
app.get("/:user_id/accounts", getAccounts);
app.post("/:user_id/accounts/delete/:account_id", deleteAccount);
app.post("/auth", authUser);
app.post("/user/create", createUser);
app.get("/user/:user_id", getUser);

app.listen(port, () => console.log(`SERVER RUNNING ON PORT:${port}`));
