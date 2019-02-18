const sphereKnn = require('sphere-knn')
const { standardizeGeolocation } = require('standardize-geolocation')
const usZips = require('us-zips/array')

const lookup = sphereKnn(usZips)

function geo2zip (rawLocation) {
  const { latitude, longitude } = standardizeGeolocation(rawLocation)
  return Promise.resolve(lookup(latitude, longitude, 1)[0].zipCode)
}

module.exports = {
  geo2zip
}
