# geo2zip

> 🌎🔍 Quickly find the the nearest U.S. ZIP codes to a latitude/longitude geolocation using k-nearest neighbors

[![Travis](https://img.shields.io/travis/blakek/geo2zip/master.svg)][1]

Takes a geolocation and returns the nearest US ZIP codes.

⚠️ **NOTE:** The top result may not return the _actual_ ZIP code containing the
location. This library returns the ZIP code where the approximate center of the
ZIP is nearest the given location. Larger ZIP code areas may show lower in the
results when searching nearby points because the center can be so far away. If
you're relying on something as inaccurate as ZIP codes, the top result is likely
close enough.

Also, ZIP codes change. They change in shape and location. New ones are
created and old ones are removed. They're even recycled. If you know of a
reliable, more up-to-date list of ZIP codes, please let us know by opening an
issue.

**Can I use this in the browser?** Yes but please don't. This is made to run on
a Node.js server. This depends on a roughly [2 MB list of US ZIP
codes][2] and sorts those in-memory. Please
don't do that to my phone. If you're experimenting or know what you're doing,
use this wherever and however it works for you.

**Isn't sorting and filtering on a 2MB file slow in JavaScript?** No. A lookup
is created when the main file is imported/required. After the lookup is created,
you should be able to run the examples in this README millions of times per
second; showing output would be the limit. The tradeoff is your server may take
a 1-2 seconds longer to start up initially (e.g. from `npm run start`).

## Install

With [Yarn](https://yarnpkg.com/en/) or [npm](https://npmjs.org/) installed,
run:

```shell
yarn add geo2zip

# ...or, if using `npm`
npm install geo2zip
```

## Usage

Get the nearest ZIP to a location:

```js
import geo2zip from "geo2zip";

const location = {
  latitude: 34.659698,
  longitude: -88.242903,
};

const closestZip = await geo2zip(location);

console.log(closestZip); // ['38873']
```

Get the closest 5 ZIPs to a location:

```js
import geo2zip from "geo2zip";

const location = {
  latitude: 34.659698,
  longitude: -88.242903,
};

await geo2zip(location, { limit: 5 });
// [ '38873', '38838', '38827', '38859', '38852' ]
```

## API

### `geo2zip(location, options)`

#### location

Type: `Object`

A geolocation with valid `latitude` and `longitude` properties.

#### options

Type: `Object`

Properties:

- `limit` - the number of results to return
  - Type: `Number`
  - Default: `1`

## See Also

- [`standardize-geolocation`][3] - takes geolocations of different formats and
  outputs a standardized version
- [`sphere-knn`][4] - find the k nearest neighbors for points on a sphere
- [`us-zips`][2] - a list of US ZIP codes and their geolocations

## License

MIT

[1]: https://travis-ci.org/blakek/geo2zip
[2]: https://github.com/blakek/us-zips
[3]: https://github.com/blakek/standardize-geolocation
[4]: https://github.com/darkskyapp/sphere-knn
