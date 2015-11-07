var app = angular
  .module('TrueFoodReview.HomeController',['ui.router'])
  .controller('HomeController', ['$scope', HomeController]);


function HomeController($scope) {

  $scope.loadMap = function(){

  	// map = new google.maps.Map(document.getElementById('map'), {
    // 	center: {lat: -34.397, lng: 150.644},
    // 	zoom: 8
  	// });

    var myLatLng = {lat: 33.97914, lng: -118.41480705731};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });



  };
}
