const dotenv = require("dotenv");
const debug = require("debug");
const server = debug("server:main");
const database = debug("server:db");
const error = debug("server:error");

// Utils
const { db } = require("./utils/database");
const { initModels } = require("./utils/initModels");

// Express app
const { app } = require("./app");

dotenv.config({ path: "./.env" });

initModels();

db.authenticate()
  .then(() => database("DB authenticated"))
  .catch((err) => error(err));

db.sync()
  .then(() => {
    database("Database connected");
    startServer();
  })
  .catch((err) => error(err));

const startServer = () => {
  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    server(`Challenge API running on port ${PORT}!`);
  });
};
