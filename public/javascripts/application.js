function initialize(myLocation) {
  var mapOptions = {
    zoom: 15,
    center: myLocation,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    streetViewControl: false,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL,
      position: google.maps.ControlPosition.RIGHT_BOTTOM
    },
    panControl: true,
    panControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM
    },
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"),
      mapOptions);
  marker = new google.maps.Marker({
        map:map,
        draggable:true,
        animation: google.maps.Animation.DROP,
        position: myLocation
      });
}

$(document).ready(function () {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $("form#new_record input[name='lat']").val(position.coords.latitude);
      $("form#new_record input[name='lng']").val(position.coords.longitude);
      myLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      initialize(myLocation);
    });
  } 
  else {
    alert("Votre navigateur ne prend pas en compte la géolocalisation HTML5");
  }

  $('#captions').masonry({
    itemSelector: '.caption',
    columnWidth: 190,
    isAnimated: true,
    animationOptions: {
      duration: 750,
    }
  });

});