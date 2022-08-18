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
    const user_id = +req.params.user_id;
    const { website, username, password } = req.body;

    sequelize
      .query(
        `INSERT INTO accounts (
        website, username, password, user_id)
        values ('${website}', '${username}', '${password}', ${user_id})`
      )
      .then(() => {
        sequelize
          .query(`SELECT * FROM accounts WHERE user_id = ${user_id}`)
          .then((dbRes) => res.status(200).send(dbRes[0]));
      });
  },

  getAccounts: (req, res) => {
    const user_id = +req.params.user_id;

    sequelize
      .query(`SELECT * FROM accounts WHERE user_id = ${user_id}`)
      .then((dbRes) => res.status(200).send(dbRes[0]));
  },

  deleteAccount: (req, res) => {
    const user_id = +req.params.user_id;

    sequelize
      .query(
        `DELETE FROM accounts
        WHERE account_id = ${+req.params.account_id}`
      )
      .then(() => {
        sequelize
          .query(`SELECT * FROM accounts WHERE user_id = ${user_id}`)
          .then((dbRes) => res.status(200).send(dbRes[0]));
      });
  },

  authUser: (req, res) => {
    const { login_username } = req.body;

    sequelize
      .query(
        `SELECT * FROM users
        WHERE login_username = '${login_username}'`
      )
      .then((dbRes) => res.status(200).send(dbRes[0][0]))
      .catch((err) => res.status(400).send(err));
  },

  createUser: (req, res) => {
    const { newUsername, newPassword } = req.body;

    sequelize
      .query(
        `INSERT INTO users (login_username, login_password)
        VALUES ('${newUsername}', '${newPassword}')`
      )
      .then(() => {
        sequelize
          .query(`SELECT * FROM users WHERE login_username = '${newUsername}'`)
          .then((dbRes) => {
            res.status(200).send(dbRes[0][0]);
          })
          .catch((err) => res.status(400).send(err));
      })
      .catch((err) => res.status(400).send(err));
  },

  getUser: (req, res) => {
    const user_id = +req.params.user_id;

    sequelize
      .query(`SELECT * FROM users WHERE user_id = '${user_id}'`)
      .then((dbRes) => {
        res.status(200).send(dbRes[0][0]);
      });
  }
};
