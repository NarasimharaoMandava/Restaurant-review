var storageDB = "DBase"
this.addEventListener('install', eve => {
  eve.waitUntil(
    caches.open(storageDB).then(myDBase => {
      myDBase.addAll(['index.html',
        'restaurant.html',
        './js/dbhelper.js',
        './js/main.js',
        './js/register.js',
        './js/restaurant.js',
        './data/restaurants.json',
        './css/style.css',
        './img/'
      ]);
    })
  )
})

this.addEventListener('fetch', eve => {
  eve.respondWith(
    caches.open(storageDB).then(myDBase => {
      return myDBase.match(eve.request).then(result => {
        return result || fetch(eve.request).then(response => {
          myDBase.put(eve.request, response.clone());
          return response;
        });
      });
    })
  )
})
