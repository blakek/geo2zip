import test from "ava";
import geo2zip from ".";

test("returns zip code nearest a geolocation", async (t) => {
  const testPoints = [
    {
      expected: "38873",
      location: { latitude: 34.659698, longitude: -88.242903 },
    },
    {
      expected: "37076",
      location: { latitude: 36.142226, longitude: -86.618779 },
    },
  ];

  for (const { expected, location } of testPoints) {
    const [actual] = await geo2zip(location);
    t.is(actual, expected);
  }
});

test("returns a list of zip codes nearest a location, ordered by closeness", async (t) => {
  const testPoints = [
    {
      expected: "38859",
      location: { latitude: 34.659698, longitude: -88.242903 },
    },
    {
      expected: "37214",
      location: { latitude: 36.1432503, longitude: -86.6202267 },
    },
  ];

  for (const { expected, location } of testPoints) {
    const actual = await geo2zip(location, { limit: 5 });
    t.true(actual.includes(expected));
  }
});
