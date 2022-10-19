declare module "sphere-knn" {
  type WithLatitude = { lat: number } | { latitude: number };

  type WithLongitude =
    | { lon: number }
    | { lng: number }
    | { long: number }
    | { longitude: number };

  type Geolocation =
    | [number, number]
    | { location: [number, number] }
    | { position: [number, number] }
    | { geometry: { coordinates: [number, number]; type: "Point" } }
    | (WithLatitude & WithLongitude);

  type Lookup = (
    latitude: number,
    longitude: number,
    limit?: number,
    maxDistance?: number
  ) => Geolocation[];

  type SphereKnn<T = Geolocation> = (points: T[]) => Lookup;

  const defaultExport: SphereKnn;
  export = defaultExport;
}
