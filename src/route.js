const pagesHandlers = require("./handlers/pages")
const getCurrent = require("./handlers/weather")
const login = require("./handlers/login")
const registerForm = require("./handlers/registerForm")

const initRoutes = (app) => {
  app.get("/", pagesHandlers.home);
  app.get("/weather", getCurrent);
  app.get("/login", login);
  app.get("/registerForm", registerForm);
};


module.exports = initRoutes;