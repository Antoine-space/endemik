const request = require("postman-request");

const geocode = (city, callback) => {
  let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${process.env.MAPBOX_API_KEY}`;
  request({ url, json: true }, (error, response, body) => {
    if (error) {
      return callback(error, undefined);
    }

    if (response.statusCode >= 400) {
      return callback("An error occured during fetching url", undefined);
    }

    if (body.features.length === 0) {
      return callback("No cities found", undefined);
    }

    let coordinates = body.features[0].geometry.coordinates;
    let coords = {
      lat: coordinates[1],
      lng: coordinates[0],
    };
    return callback(undefined, coords);
  });
};

module.exports = geocode;
