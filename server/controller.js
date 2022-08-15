require("dotenv").config();
const { CONNECTION_STRING } = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
});

module.exports = {
  addAccount: (req, res) => {
    const { website, username, password, user_id } = req.body;

    sequelize.query(`INSERT INTO accounts (
      website, username, password, user_id)
      values ('${website}', '${username}', '${password}', ${user_id})`);

    res.status(200).send("account added");
  },

  getAccounts: (req, res) => {
    sequelize
      .query(
        `SELECT * FROM accounts
    WHERE user_id = 1`
      )
      .then((dbRes) => res.status(200).send(dbRes[0]));
  }
};
