import test from 'ava'
import geo2zip from '.'

test('returns zip code from same geolocation', async t => {
  const exactly38873 = {
    latitude: 34.659698,
    longitude: -88.242903
  }

  const zip = await geo2zip(exactly38873)

  t.is(zip, '38873')
})

test('returns nearest zip code for geolocation', async t => {
  const near37076 = {
    latitude: 36.142226,
    longitude: -86.618779
  }

  const zip = await geo2zip(near37076)

  t.is(zip, '37076')
})
