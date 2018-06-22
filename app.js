function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(33.345917, -86.800178),
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        
    }


var map = new google.maps.Map(document.getElementById("map"), mapOptions);


}



