import sphereKnn from "sphere-knn";
import {
  GeolocationInput,
  standardizeGeolocation,
} from "standardize-geolocation";
import { ZIPCode } from "us-zips";
import usZips, { ZIPCodeList } from "us-zips/array";

export interface Options {
  limit: number;
}

export const defaultOptions: Options = { limit: 1 };

// Start building lookup when module imported
const lookup = sphereKnn(usZips);

// Don't recreate this function on every run
const pluckZipCode = (obj: { zipCode: string }) => obj.zipCode;

export function geo2zip(
  location: GeolocationInput,
  extraOptions: Partial<Options> = {}
): Promise<ZIPCode[]> {
  const options = { ...defaultOptions, ...extraOptions };
  const { latitude, longitude } = standardizeGeolocation(location);

  return new Promise((resolve) => {
    const results = lookup(latitude, longitude, options.limit) as ZIPCodeList;

    resolve(results.map(pluckZipCode));
  });
}

export default geo2zip;
