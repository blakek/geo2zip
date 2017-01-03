const sphereKnn = require('sphere-knn')
const { standardizeGeolocation } = require('standardize-geolocation')
const usZips = require('us-zips')

const cleanedPoints = Object
  .keys(usZips)
  .map(zipCode => Object.assign(usZips[zipCode], { zipCode }))

const lookup = sphereKnn(cleanedPoints)

function geo2zip (rawLocation) {
  const { latitude, longitude } = standardizeGeolocation(rawLocation)
  return Promise.resolve(lookup(latitude, longitude, 1)[0].zipCode)
}

module.exports = {
  geo2zip
}
