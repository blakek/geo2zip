const findNearest = require('geolib').findNearest
const { standardizeGeolocation } = require('standardize-geolocation')
const usZips = require('us-zips')

function geo2zip (rawLocation) {
  const location = standardizeGeolocation(rawLocation)
  return new Promise(resolve => {
    resolve(findNearest(location, usZips).key)
  })
}

module.exports = {
  geo2zip
}
