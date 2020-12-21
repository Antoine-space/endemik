const pagesHandlers = require("./handlers/pages")
const getCurrent = require("./handlers/weather")
const login = require("./handlers/login")

const initRoutes = (app) => {
  app.get("/", pagesHandlers.home);
  app.get("/weather", getCurrent);
  app.get("/login", login);
};


module.exports = initRoutes;