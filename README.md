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

## Acknowledgments

Data for ZIP codes and their geolocations was generated from [this file](http://www2.census.gov/geo/docs/maps-data/data/gazetteer/2015_Gazetteer/2015_Gaz_zcta_national.zip), which can be downloaded from the [US Census Bureau site](http://www.census.gov/geo/maps-data/data/gazetteer2015.html).

## License

MIT
