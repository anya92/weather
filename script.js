$(document).ready(function(){function p(a){var g,b=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"),c=new Array("January","February","March","April","May","June","July","August","September","October","November","December"),d=b[a.getDay()],e=a.getDate(),f=c[a.getMonth()];return g=1===e||21===e||31===e?"st":2===e||22===e?"nd":3===e||23===e?"rd":"th",d+", "+e+"<sup>"+g+"</sup> "+f}function s(){function n(n){var o=n.coords.latitude,p=n.coords.longitude,q="7454b19791bd732893f680d7158c2b08",r="pl";$.ajax({url:"https://api.darksky.net/forecast/"+q+"/"+o+","+p+"?units=si&exclude=minutely,hourly,alerts,flags&lang="+r,dataType:"jsonp",success:function(n){a=n.currently.summary,b=n.currently.icon,m=l[b],c=Math.floor(n.currently.temperature),d=Math.floor(n.currently.apparentTemperature),e=100*n.currently.cloudCover,f=100*n.currently.humidity,g=100*n.currently.precipProbability,h=n.currently.precipType,i=Math.floor(n.currently.pressure),j=Math.floor(n.currently.windSpeed),k=n.daily.summary,$("#summary").html(a),$("#icon").attr("class",m),$("#temperature").html(c+"&deg;C"),$("#apparentTemperature").html(d+"&deg;C"),$("#cloudCover").html(e+"%"),$("#humidity").html(f+"%"),void 0===h&&$("#precipType").html("rain/snow"),$("#precipType").html(h),$("#precipProbability").html(g+"%"),$("#pressure").html(i+" hPa"),$("#windSpeed").html(j+" m/s"),$("#forecastSummary").html(k+".");var o=new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat"),p=new Date(1e3*n.daily.data[1].time),q=new Date(1e3*n.daily.data[2].time),r=new Date(1e3*n.daily.data[3].time),s=new Date(1e3*n.daily.data[4].time),t=new Date(1e3*n.daily.data[5].time),u=new Date(1e3*n.daily.data[6].time);p.toGMTString(),q.toGMTString(),r.toGMTString(),s.toGMTString(),t.toGMTString(),u.toGMTString();var v=o[p.getDay()],w=o[q.getDay()],x=o[r.getDay()],y=o[s.getDay()],z=o[t.getDay()],A=o[u.getDay()];$("#one").html(v),$("#two").html(w),$("#three").html(x),$("#four").html(y),$("#five").html(z),$("#six").html(A);var B=Math.floor(n.daily.data[1].temperatureMax),C=Math.floor(n.daily.data[1].temperatureMin);$("#temp1").html(B+"&deg;/"+C+"&deg;");var D=Math.floor(n.daily.data[2].temperatureMax),E=Math.floor(n.daily.data[2].temperatureMin);$("#temp2").html(D+"&deg;/"+E+"&deg;");var F=Math.floor(n.daily.data[3].temperatureMax),G=Math.floor(n.daily.data[3].temperatureMin);$("#temp3").html(F+"&deg;/"+G+"&deg;");var H=Math.floor(n.daily.data[4].temperatureMax),I=Math.floor(n.daily.data[4].temperatureMin);$("#temp4").html(H+"&deg;/"+I+"&deg;");var J=Math.floor(n.daily.data[5].temperatureMax),K=Math.floor(n.daily.data[5].temperatureMin);$("#temp5").html(J+"&deg;/"+K+"&deg;");var L=Math.floor(n.daily.data[6].temperatureMax),M=Math.floor(n.daily.data[6].temperatureMin);$("#temp6").html(L+"&deg;/"+M+"&deg;");var N=n.daily.data[1].icon;newIcon1=l[N],$("#icon1").attr("class",newIcon1);var O=n.daily.data[2].icon;newIcon2=l[O],$("#icon2").attr("class",newIcon2);var P=n.daily.data[3].icon;newIcon3=l[P],$("#icon3").attr("class",newIcon3);var Q=n.daily.data[4].icon;newIcon4=l[Q],$("#icon4").attr("class",newIcon4);var R=n.daily.data[5].icon;newIcon5=l[R],$("#icon5").attr("class",newIcon5);var S=n.daily.data[6].icon;newIcon6=l[S],$("#icon6").attr("class",newIcon6)}})}navigator.geolocation?navigator.geolocation.getCurrentPosition(n):showError("Your browser does not support Geolocation!")}var a,b,c,d,e,f,g,h,i,j,k,m,n,l={rain:"wi wi-forecast-io-rain","day-sunny":"wi wi-forecast-io-clear-day","clear-day":"wi wi-forecast-io-clear-day","night-clear":"wi wi-forecast-io-clear-night","clear-night":"wi wi-forecast-io-clear-night",snow:"wi wi-forecast-io-snow",sleet:"wi wi-forecast-io-sleet","strong-wind":"wi wi-forecast-io-wind",fog:"wi wi-forecast-io-fog",wind:"wi wi-yahoo-21",cloudy:"wi wi-cloudy","day-cloudy":"wi wi-forecast-io-partly-cloudy-day","partly-cloudy-day":"wi wi-forecast-io-partly-cloudy-day","night-cloudy":"wi wi-forecast-io-partly-cloudy-night","partly-cloudy-night":"wi wi-forecast-io-partly-cloudy-night",hail:"wi wi-forecast-io-hail",thunderstorm:"wi wi-forecast-io-thunderstorm",tornado:"wi wi-forecast-io-tornado"},o="https://ipinfo.io/json";$.getJSON(o,function(a){n=a.city,$("#location").html('<i class="fa fa-map-marker"></i>  '+n)});var q=new Date,r=p(q);$("#date").html(r),s()});