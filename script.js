$(document).ready(function(){function r(a){var g,b=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"),c=new Array("January","February","March","April","May","June","July","August","September","October","November","December"),d=b[a.getDay()],e=a.getDate(),f=c[a.getMonth()];return g=1===e||21===e||31===e?"st":2===e||22===e?"nd":3===e||23===e?"rd":"th",d+", "+e+"<sup>"+g+"</sup> "+f}function u(){function q(q){var r=q.coords.latitude,s=q.coords.longitude,t="7454b19791bd732893f680d7158c2b08",u="pl",v="https://maps.googleapis.com/maps/api/geocode/json?latlng="+r+","+s+"&sensor=true";$.getJSON(v,function(a){p=a.results[0].address_components[2].short_name;var b=a.results[0].address_components[4].short_name;$("#location").html('<i class="fa fa-map-marker"></i>  '+p+", "+b),console.log(a.results[0])}),$.ajax({url:"https://api.darksky.net/forecast/"+t+"/"+r+","+s+"?units=si&exclude=minutely,hourly,alerts,flags&lang="+u,dataType:"jsonp",success:function(p){a=p.currently.summary,b=p.currently.icon,o=n[b],c=Math.floor(p.currently.temperature),l=Math.floor(9*c/5+32),d=Math.floor(p.currently.apparentTemperature),m=Math.floor(9*d/5+32),e=100*p.currently.cloudCover,f=100*p.currently.humidity,g=100*p.currently.precipProbability,h=p.currently.precipType,i=Math.floor(p.currently.pressure),j=Math.floor(p.currently.windSpeed),k=p.daily.summary,$("#summary").html(a),$("#icon").attr("class",o),$("#temperature").html(c+"&deg;C"),$("#apparentTemperature").html(d+"&deg;C"),$("#cloudCover").html(e+"%"),$("#humidity").html(f+"%"),void 0===h&&$("#precipType").html("rain/snow"),$("#precipType").html(h),$("#precipProbability").html(g+"%"),$("#pressure").html(i+" hPa"),$("#windSpeed").html(j+" m/s"),$("#forecastSummary").html(k+"."),$("#cmn-toggle-7").on("change",function(){this.checked?($("#temperature").html(l+"&deg;F"),$("#apparentTemperature").html(m+"&deg;F"),$("#temp1").html(F+"&deg;/"+G+"&deg;"),$("#temp2").html(J+"&deg;/"+K+"&deg;"),$("#temp3").html(N+"&deg;/"+O+"&deg;"),$("#temp4").html(R+"&deg;/"+S+"&deg;"),$("#temp5").html(V+"&deg;/"+W+"&deg;"),$("#temp6").html(Z+"&deg;/"+_+"&deg;")):($("#temperature").html(c+"&deg;C"),$("#apparentTemperature").html(d+"&deg;C"),$("#temp1").html(D+"&deg;/"+E+"&deg;"),$("#temp2").html(H+"&deg;/"+I+"&deg;"),$("#temp3").html(L+"&deg;/"+M+"&deg;"),$("#temp4").html(P+"&deg;/"+Q+"&deg;"),$("#temp5").html(T+"&deg;/"+U+"&deg;"),$("#temp6").html(X+"&deg;/"+Y+"&deg;"))});var q=new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat"),r=new Date(1e3*p.daily.data[1].time),s=new Date(1e3*p.daily.data[2].time),t=new Date(1e3*p.daily.data[3].time),u=new Date(1e3*p.daily.data[4].time),v=new Date(1e3*p.daily.data[5].time),w=new Date(1e3*p.daily.data[6].time);r.toGMTString(),s.toGMTString(),t.toGMTString(),u.toGMTString(),v.toGMTString(),w.toGMTString();var x=q[r.getDay()],y=q[s.getDay()],z=q[t.getDay()],A=q[u.getDay()],B=q[v.getDay()],C=q[w.getDay()];$("#one").html(x),$("#two").html(y),$("#three").html(z),$("#four").html(A),$("#five").html(B),$("#six").html(C);var D=Math.floor(p.daily.data[1].temperatureMax),E=Math.floor(p.daily.data[1].temperatureMin),F=Math.floor(9*D/5+32),G=Math.floor(9*E/5+32);$("#temp1").html(D+"&deg;/"+E+"&deg;");var H=Math.floor(p.daily.data[2].temperatureMax),I=Math.floor(p.daily.data[2].temperatureMin),J=Math.floor(9*H/5+32),K=Math.floor(9*I/5+32);$("#temp2").html(H+"&deg;/"+I+"&deg;");var L=Math.floor(p.daily.data[3].temperatureMax),M=Math.floor(p.daily.data[3].temperatureMin),N=Math.floor(9*L/5+32),O=Math.floor(9*M/5+32);$("#temp3").html(L+"&deg;/"+M+"&deg;");var P=Math.floor(p.daily.data[4].temperatureMax),Q=Math.floor(p.daily.data[4].temperatureMin),R=Math.floor(9*P/5+32),S=Math.floor(9*Q/5+32);$("#temp4").html(P+"&deg;/"+Q+"&deg;");var T=Math.floor(p.daily.data[5].temperatureMax),U=Math.floor(p.daily.data[5].temperatureMin),V=Math.floor(9*T/5+32),W=Math.floor(9*U/5+32);$("#temp5").html(T+"&deg;/"+U+"&deg;");var X=Math.floor(p.daily.data[6].temperatureMax),Y=Math.floor(p.daily.data[6].temperatureMin),Z=Math.floor(9*X/5+32),_=Math.floor(9*Y/5+32);$("#temp6").html(X+"&deg;/"+Y+"&deg;");var aa=p.daily.data[1].icon;newIcon1=n[aa],$("#icon1").attr("class",newIcon1);var ba=p.daily.data[2].icon;newIcon2=n[ba],$("#icon2").attr("class",newIcon2);var ca=p.daily.data[3].icon;newIcon3=n[ca],$("#icon3").attr("class",newIcon3);var da=p.daily.data[4].icon;newIcon4=n[da],$("#icon4").attr("class",newIcon4);var ea=p.daily.data[5].icon;newIcon5=n[ea],$("#icon5").attr("class",newIcon5);var fa=p.daily.data[6].icon;newIcon6=n[fa],$("#icon6").attr("class",newIcon6)}})}navigator.geolocation?navigator.geolocation.getCurrentPosition(q):showError("Your browser does not support Geolocation!")}var a,b,c,d,e,f,g,h,i,j,k,l,m,o,p,n={rain:"wi wi-forecast-io-rain","day-sunny":"wi wi-forecast-io-clear-day","clear-day":"wi wi-forecast-io-clear-day","night-clear":"wi wi-forecast-io-clear-night","clear-night":"wi wi-forecast-io-clear-night",snow:"wi wi-forecast-io-snow",sleet:"wi wi-forecast-io-sleet","strong-wind":"wi wi-forecast-io-wind",fog:"wi wi-forecast-io-fog",wind:"wi wi-yahoo-21",cloudy:"wi wi-cloudy","day-cloudy":"wi wi-forecast-io-partly-cloudy-day","partly-cloudy-day":"wi wi-forecast-io-partly-cloudy-day","night-cloudy":"wi wi-forecast-io-partly-cloudy-night","partly-cloudy-night":"wi wi-forecast-io-partly-cloudy-night",hail:"wi wi-forecast-io-hail",thunderstorm:"wi wi-forecast-io-thunderstorm",tornado:"wi wi-forecast-io-tornado"},s=new Date,t=r(s);$("#date").html(t),u()});