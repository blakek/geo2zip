# geo2zip

> Translates latitude / longitude geolocations to the nearest corresponding U.S. zip code

Takes a geolocation and returns the nearest US ZIP code

## Usage

Let's do X:

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
