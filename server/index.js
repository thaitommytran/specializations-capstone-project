require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const {
  addAccount,
  getAccounts,
  deleteAccount,
  authUser,
  createUser,
  getUser
} = require("./controller");

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(cors());

app.use(express.static(path.resolve(__dirname, "../build")));

app.post("/:user_id/accounts", addAccount);
app.get("/:user_id/accounts", getAccounts);
app.post("/:user_id/accounts/delete/:account_id", deleteAccount);
app.post("/auth", authUser);
app.post("/user/create", createUser);
app.get("/user/:user_id", getUser);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT:${PORT}`));
