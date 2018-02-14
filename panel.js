/*
 * Source: Google Maps Store Locator Library API; http://googlemaps.github.io/libraries
 * Modified to show my map coordinates, adjust zoom level and pull in my data source.
 */

google.maps.event.addDomListener(window, 'load', function() {
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: new google.maps.LatLng(48.846899, 2.336855),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var panelDiv = document.getElementById('panel');

  var data = new ShopDataSource;
  
  //connects the map and the data
  //this line of code draws the map
  var view = new storeLocator.View(map, data, {
    geolocation: false,
    //this method pulls in the store features
    features: data.getFeatures()
  });

  new storeLocator.Panel(panelDiv, {
    view: view
  });
});
