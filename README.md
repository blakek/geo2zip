# geo2zip [![Travis](https://img.shields.io/travis/blakek/geo2zip.svg)](https://travis-ci.org/blakek/geo2zip)

> Translates latitude / longitude geolocations to the nearest corresponding U.S. zip code

Takes a geolocation and returns the nearest US ZIP code.

⚠️ **NOTE:** this may not return the actual ZIP code of the location; it returns the ZIP code where the approximate center of the ZIP is nearest the location.

## Usage

Get the nearest ZIP to a location:

```js
const geo2zip = require('geo2zip')

const somewhere = {
  latitude: 34.659698,
  longitude: -88.242903
}

geo2zip(somewhere).then(zip => {
  console.log(zip) // '38873'
})
```

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install geo2zip
```

## See Also

  * [`blakek/us-zips`](https://github.com/blakek/us-zips) - a list of US ZIP codes and their geolocations

## License

MIT
