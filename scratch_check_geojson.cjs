const https = require('https');

https.get('https://raw.githubusercontent.com/geohacker/india/master/district/india_district.geojson', (res) => {
  let data = '';
  res.on('data', chunk => {
    data += chunk;
    if (data.length > 500000) {
      res.destroy();
      const matches = data.match(/"properties":\s*\{[^}]+\}/g);
      if (matches) {
        console.log('Sample properties:');
        matches.slice(0, 5).forEach(m => console.log(m));
      }
    }
  });
}).on('error', err => {
  console.error(err);
});
