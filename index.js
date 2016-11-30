const findNearest = require('geolib').findNearest
const usZips = require('./zip-locations')

const standardizeLocation = (location) => {
  const latitude = location.latitude || location.lat
  const longitude = location.longitude || location.long || location.lng
  return {
    latitude,
    longitude
  }
}

function geo2zip (rawLocation) {
  const location = standardizeLocation(rawLocation)
  return new Promise(resolve => {
    resolve(findNearest(location, usZips).key)
  })
}

module.exports = {
  geo2zip
}
