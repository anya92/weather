$(document).ready(function() {
    var APPID = 'dj0yJmk9dDBZUGdrNDFyODVHJmQ9WVdrOWJXWXlWRzlOTm0wbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD1mNw--'; // Your Yahoo Application ID
    var DEG = 'c'; // c for celsius, f for fahrenheit

    // Does this browser support geolocation?
    if (navigator.geolocation) {
    	navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
    }
    else{
    	showError("Your browser does not support Geolocation!");
    }

    function locationSuccess(position) {
    	var lat = position.coords.latitude;
    	var lon = position.coords.longitude;
      var lang = 'pl';
      var appID = 'd14de14b427341cdeb78d858c2ec07a8';
      var url = 'http://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&units=metric&lang='+lang+'&appid='+appID;

      $.getJSON(url, function(data) {
        var city = data.city.name;
        var date = data.list[0].dt_txt;
        $("#location").text(city);
        $("#date").text(date);


        console.log(data);

      });
    	// We will make further requests to Yahoo's APIs here

    }

    function locationError(error){
    	switch(error.code) {
    		case error.TIMEOUT:
    			showError("A timeout occured! Please try again!");
    			break;
    		case error.POSITION_UNAVAILABLE:
    			showError('We can\'t detect your location. Sorry!');
    			break;
    		case error.PERMISSION_DENIED:
    			showError('Please allow geolocation access for this to work.');
    			break;
    		case error.UNKNOWN_ERROR:
    			showError('An unknown error occured!');
    			break;
    	}

    }

    function showError(msg){
    	weatherDiv.addClass('error').html(msg);
    }



});
