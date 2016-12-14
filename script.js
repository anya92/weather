$(document).ready(function() {
    var summary, icon, temperature, apparentTemperature, cloudCover, humidity, precipProbability, precipType, pressure, windSpeed, forecastSummary;
    var icons = {
        "rain": "wi wi-forecast-io-rain",
        "day-sunny": "wi wi-forecast-io-clear-day",
        "clear-day": "wi wi-forecast-io-clear-day",
        "night-clear": "wi wi-forecast-io-clear-night",
        "clear-night": "wi wi-forecast-io-clear-night",
        "snow": "wi wi-forecast-io-snow",
        "sleet": "wi wi-forecast-io-sleet",
        "strong-wind": "wi wi-forecast-io-wind",
        "fog": "wi wi-forecast-io-fog",
        "wind": "wi wi-yahoo-21",
        "cloudy": "images/Status-weather-showers-scattered-icon.png",
        "day-cloudy": "wi wi-forecast-io-partly-cloudy-day",
        "partly-cloudy-day": "wi wi-forecast-io-partly-cloudy-day",
        "night-cloudy": "wi wi-forecast-io-partly-cloudy-night",
        "partly-cloudy-night": "wi wi-forecast-io-partly-cloudy-night",
        "hail": "wi wi-forecast-io-hail",
        "thunderstorm": "wi wi-forecast-io-thunderstorm",
        "tornado": "wi wi-forecast-io-tornado"
    };
    var newIcon;
    var city;
    var cityURL = 'https://ipinfo.io/json';
    // getting city name
    $.getJSON(cityURL, function(response) {
        city = response.city;
        $("#location").html('<i class="fa fa-map-marker"></i>'+"  " + city);
    });
    // getting date
    function getFormattedDate(today) {
        var week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        var month = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December');
        var day = week[today.getDay()];
        var dd = today.getDate();
        var mm = month[today.getMonth()];
        var sup;
        if (dd === 1 || dd === 21 || dd === 31) {sup = 'st';}
        else if (dd === 2 || dd === 22) {sup = 'nd';}
        else if (dd === 3 || dd === 23) {sup = 'rd';}
        else {sup = 'th';}
        //console.log(day4);
        return day + ', ' + dd + '<sup>' + sup + '</sup>' + ' ' + mm;
    }
    var date = new Date();
    var currentDate = getFormattedDate(date);
    $("#date").html(currentDate);


    //location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(locationSuccess);
    } else {
        showError("Your browser does not support Geolocation!");
    }

    function locationSuccess(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        var key = '7454b19791bd732893f680d7158c2b08';
        var lang = 'pl';

        // request to DarkSky API
        $.ajax({
            url: 'https://api.darksky.net/forecast/' + key + '/' + lat + ',' + lon +'?units=si&exclude=minutely,hourly,alerts,flags&lang=' + lang,
            dataType: 'jsonp',
            success: function(data) {
              summary = data.currently.summary;
              icon = data.currently.icon;
              newIcon = icons[icon];
              temperature = Math.floor(data.currently.temperature);
              apparentTemperature = Math.floor(data.currently.apparentTemperature);
              cloudCover = data.currently.cloudCover*100;
              humidity = data.currently.humidity*100;
              precipProbability = data.currently.precipProbability*100;
              precipType = data.currently.precipType;
              pressure = Math.floor(data.currently.pressure);
              windSpeed = Math.floor(data.currently.windSpeed);
              forecastSummary = data.daily.summary;
              $("#summary").html(summary);
              $("#icon").attr('class', newIcon);
              $("#temperature").html(temperature + "&deg;C");
              $("#apparentTemperature").html(apparentTemperature + "&deg;C");
              $("#cloudCover").html(cloudCover + "%");
              $("#humidity").html(humidity + "%");
              $("#precipType").html(precipType);
              $("#precipProbability").html(precipProbability + "%");
              $("#pressure").html(pressure + " hPa");
              $("#windSpeed").html(windSpeed + " m/s");
              $("#forecastSummary").html(forecastSummary);
              // 6 days forecast
              var week = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');
              var day1Time = new Date(data.daily.data[1].time*1000);
              var day2Time = new Date(data.daily.data[2].time*1000);
              var day3Time = new Date(data.daily.data[3].time*1000);
              var day4Time = new Date(data.daily.data[4].time*1000);
              var day5Time = new Date(data.daily.data[5].time*1000);
              var day6Time = new Date(data.daily.data[6].time*1000);
              day1Time.toGMTString();
              day2Time.toGMTString();
              day3Time.toGMTString();
              day4Time.toGMTString();
              day5Time.toGMTString();
              day6Time.toGMTString();
              var day1 = week[day1Time.getDay()];
              var day2 = week[day2Time.getDay()];
              var day3 = week[day3Time.getDay()];
              var day4 = week[day4Time.getDay()];
              var day5 = week[day5Time.getDay()];
              var day6 = week[day6Time.getDay()];
              $("#one").html(day1);
              $("#two").html(day2);
              $("#three").html(day3);
              $("#four").html(day4);
              $("#five").html(day5);
              $("#six").html(day6);
              //temperature
              var maxTemp1 = Math.floor(data.daily.data[1].temperatureMax);
              var minTemp1 = Math.floor(data.daily.data[1].temperatureMin);
              $("#temp1").html(maxTemp1 + '&deg;/' + minTemp1 + '&deg;');
              var maxTemp2 = Math.floor(data.daily.data[2].temperatureMax);
              var minTemp2 = Math.floor(data.daily.data[2].temperatureMin);
              $("#temp2").html(maxTemp2 + '&deg;/' + minTemp2 + '&deg;');
              var maxTemp3 = Math.floor(data.daily.data[3].temperatureMax);
              var minTemp3 = Math.floor(data.daily.data[3].temperatureMin);
              $("#temp3").html(maxTemp3 + '&deg;/' + minTemp3 + '&deg;');
              var maxTemp4 = Math.floor(data.daily.data[4].temperatureMax);
              var minTemp4 = Math.floor(data.daily.data[4].temperatureMin);
              $("#temp4").html(maxTemp4 + '&deg;/' + minTemp4 + '&deg;');
              var maxTemp5 = Math.floor(data.daily.data[5].temperatureMax);
              var minTemp5 = Math.floor(data.daily.data[5].temperatureMin);
              $("#temp5").html(maxTemp5 + '&deg;/' + minTemp5 + '&deg;');
              var maxTemp6 = Math.floor(data.daily.data[6].temperatureMax);
              var minTemp6 = Math.floor(data.daily.data[6].temperatureMin);
              $("#temp6").html(maxTemp6 + '&deg;/' + minTemp6 + '&deg;');
              // icons
              var icon1 = data.daily.data[1].icon;
              newIcon1 = icons[icon1];
              $("#icon1").attr('class', newIcon1);
              var icon2 = data.daily.data[2].icon;
              newIcon2 = icons[icon2];
              $("#icon2").attr('class', newIcon2);
              var icon3 = data.daily.data[3].icon;
              newIcon3 = icons[icon3];
              $("#icon3").attr('class', newIcon3);
              var icon4 = data.daily.data[4].icon;
              newIcon4 = icons[icon4];
              $("#icon4").attr('class', newIcon4);
              var icon5 = data.daily.data[5].icon;
              newIcon5 = icons[icon5];
              $("#icon5").attr('class', newIcon5);
              var icon6 = data.daily.data[6].icon;
              newIcon6 = icons[icon6];
              $("#icon6").attr('class', newIcon6);

              console.log(data);
            }
        });

    }


});
