const geocode = require("../utils/geocode");
const cityInfos = require("../utils/cityInfo");

const getCurrent = (req, res) => {
  geocode("reims", (error, data) => {
    if (error) {
      return res.render("pages/weather", {
        data: {},
        error: { message: "from geocode", error },
      });
    }
    cityInfos(data.lat, data.lng, (error, cityData) => {
      if (error) {
        return res.render("pages/weather", {
          data: {},
          error: { message: "from city infos", error: error },
        });
      }
      res.render("pages/weather", { data: cityData, error: null });
    });
  });
};

module.exports = getCurrent;
