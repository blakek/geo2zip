const sphereKnn = require('sphere-knn');
const { standardizeGeolocation } = require('standardize-geolocation');
const usZips = require('us-zips/array');

// Start building lookup when module imported
const lookup = sphereKnn(usZips);

// Retain most-used behavior
const defaultOptions = { limit: 1 };

// Don't recreate this function on every run
const pluckZipCode = obj => obj.zipCode;

function geo2zip(location, extraOptions) {
  return new Promise(resolve => {
    const options = { ...defaultOptions, ...extraOptions };
    const { latitude, longitude } = standardizeGeolocation(location);
    const results = lookup(latitude, longitude, options.limit);

    resolve(results.map(pluckZipCode));
  });
}

module.exports = geo2zip;
