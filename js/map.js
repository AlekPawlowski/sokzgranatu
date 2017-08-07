document.addEventListener("DOMContentLoaded", function(){

     var prezes = {lat:52.107027, lng:21.271739 };
     var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: prezes

     })

          var marker = new google.maps.Marker({
          position: prezes,
          map: map

     });


     // info window

          var infowindow = new google.maps.InfoWindow ({
         content: "<h1>Biuro firmy</h1>"
          });

          marker.addListener('click', function() {
         infowindow.open(map, marker);

          });

});
