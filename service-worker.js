const CACHE_NAME = 'ceforaa-map-v1';

const FILES_TO_CACHE = [

  './',
  './index.html',

  './leaflet.css',
  './leaflet.js',

  './logo.png',

  './Huanipaca_firerisk.png',
  './Huanipaca_water.png',
  './Huanipaca_degradation.png',
  './Huanipaca_landuse.png',
  './Huanipaca.geojson',
  './Huanipaca_labels.geojson',

  './Yanatile_firerisk.png',
  './Yanatile_water.png',
  './Yanatile_degradation.png',
  './Yanatile_landuse.png',
  './Yanatile.geojson',
  './Yanatile_labels.geojson',

  './SJO_firerisk.png',
  './SJO_water.png',
  './SJO_degradation.png',
  './SJO_landuse.png',
  './SJO.geojson',
  './SJO_labels.geojson'

];

self.addEventListener('install', function(event){

  event.waitUntil(

    caches.open(CACHE_NAME)
      .then(function(cache){

        return cache.addAll(FILES_TO_CACHE);

      })

  );

});

self.addEventListener('activate', function(event){

  event.waitUntil(

    caches.keys()
      .then(function(keys){

        return Promise.all(

          keys.map(function(key){

            if(key !== CACHE_NAME){

              return caches.delete(key);

            }

          })

        );

      })

  );

});

self.addEventListener('fetch', function(event){

  event.respondWith(

    caches.match(event.request)
      .then(function(response){

        return response || fetch(event.request);

      })

  );

});