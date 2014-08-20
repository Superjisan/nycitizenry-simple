
    var map, geocoder, addressLat, addressLong;
    var getAddressInput = document.getElementById('address')

    function initialize() {

      geocoder = new google.maps.Geocoder()

      var mapOptions = {
        zoom: 16,
        center: new google.maps.LatLng(40.78013, -73.79871),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
       map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions);

      google.maps.event.trigger(map,'resize');
      map.setZoom( map.getZoom() );

      google.maps.event.addListener(map, "idle", function(){
                google.maps.event.trigger(map, 'resize');
            });
    }

    google.maps.event.addDomListener(window, 'load', initialize);


    function codeAddress() {
        var address = document.getElementById('address').value;
        geocoder.geocode( { 'address': address}, function(results, status){
          console.log("results", results)
         addressLat = results[0].geometry.location.k
         addressLong = results[0].geometry.location.B

         console.log("lat", addressLat);
         console.log("long", addressLong);

        if (status == google.maps.GeocoderStatus.OK) {

          var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
          });

            map.setCenter(marker.getPosition());

          google.maps.event.trigger(map,'resize');
          map.setZoom(16);

        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });

    }

    $(function(){
      $('#nytDistricts').on("click", function(e){
        e.preventDefault();
        console.log('yes button clicked');
        var data = {};
        data.lat = addressLat;
        data.long = addressLong;

        $.ajax({
          type: 'POST',
          data: JSON.stringify(data),
          contentType: 'application/json',
          url: '/whichDistrict',
          //on success change #json innerhtml
          success: function(data) {
            console.log('success');
            console.log("data received from server",data)
            }
          });

      })
    })
