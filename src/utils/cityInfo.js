const request = require("postman-request");

const cityInfos = (lat, lng, callback) => {
  let url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK_API_KEY}&query=${lat},${lng}`;
  request({ url, json: true }, (error, response, body) => {
    if (error) {
      return callback(error, undefined);
    }

    if (response.statusCode >= 400) {
      return callback("An error occured during fetching url", undefined);
    }

    if (body.error) {
      return callback(body.error, undefined);
    }

    let res = {
      temp: body.current.temperature,
      loc: {
        name: body.location.name,
        country: body.location.country,
      },
      time: body.current.observation_time,
    };
    callback(undefined, res);
  });
};

module.exports = cityInfos;
