var urlEndpoint = " api.openweathermap.org"
var apiKey = "15e8e9167d970f296eb474a29ada33f5";
var forecasturl = "http://api.openweathermap.org/data/2.5/forecast?q=";
var output = [];

$(document).ready(function(){
    $('#submitWeather').click(function(){
        var city = $("#city").val();
        if(city !=''){
            $.ajax({
                url: forecasturl + city + "&units=imperial" + "&APPID=15e8e9167d970f296eb474a29ada33f5",
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    var widget1 = show(data);
                    $("#showToday").html(widget1);
                    var widget2 = show1(data);
                    $("#firstDay").html(widget2);
                    var widget3 = show2(data);
                    $("#secondDay").html(widget3);
                    var widget4 = show3(data);
                    $("#thirdDay").html(widget4);
                    var widget5 = show4(data);
                    $("#fourthDay").html(widget5);
                    var widget6 = show5(data);
                    $("#fifthDay").html(widget6);
                    $("#city").val('');
                   // store(city)                     
                   // localStorage.setItem(output,JSON.stringify(city))
                   // console.log(localStorage)
                }
            })
        } else{
            $("#error").html("   Field can not be empty");
        }
    })
    function show(data){
        return  "<h1 class='text center'>Current Weather for "+ data.city.name +", " + data.city.country + "</h1>" + 
                "<h2>Weather: " +data.list[0].weather.main + "</h2>" +
                "<h2>Description: <img src='http://openweathermap.org/img/wn/"+ data.list[0].weather[0].icon +".png'>" + data.list[0].weather[0].description + "</h2>" +
                "<h2>Temperature: "+ data.list[0].main.temp + "&deg;F</h2>" +
                "<h2>Wind Speed: "+ data.list[0].wind.speed + " m/s</h2>" +
                "<h2>Pressure: "+ data.list[0].main.pressure + " hPa</h2>" +
                "<h2>Humidity: "+ data.list[0].main.humidity + " %</h2>"
    }
    function show1(data){
        return  "<h2>" + data.list[0].dt_txt + "<h2>" +
                "<h4> <img><img src='http://openweathermap.org/img/wn/" +  data.list[0].weather[0].icon + ".png'>" + data.list[0].weather[0].description + "</h4>" +
                "<p>Temperature: "+ data.list[0].main.temp + " &deg;F" + "<p>" +
                "<p>Humidity: "+ data.list[0].main.humidity + "%<p>" 
    };
    function show2(data){
        return  "<h2>" + data.list[8].dt_txt + "<h2>" +
                "<h4> <img><img src='http://openweathermap.org/img/wn/" +  data.list[8].weather[0].icon + ".png'>" + data.list[8].weather[0].description + "</h4>" +
                "<p>Temperature: "+ data.list[8].main.temp + " &deg;F" + "<p>" +
                "<p>Humidity: "+ data.list[8].main.humidity + "%<p>" 
    };
    function show3(data){
        return  "<h2>" + data.list[16].dt_txt + "<h2>" +
                "<h4> <img><img src='http://openweathermap.org/img/wn/" +  data.list[16].weather[0].icon + ".png'>" + data.list[16].weather[0].description + "</h4>" +
                "<p>Temperature: "+ data.list[16].main.temp + " &deg;F" + "<p>" +
                "<p>Humidity: "+ data.list[16].main.humidity + "%<p>" 
    };
    function show4(data){
        return  "<h2>" + data.list[24].dt_txt + "<h2>" +
                "<h4> <img><img src='http://openweathermap.org/img/wn/" +  data.list[24].weather[0].icon + ".png'>" + data.list[24].weather[0].description + "</h4>" +
                "<p>Temperature: "+ data.list[24].main.temp + " &deg;F" + "<p>" +
                "<p>Humidity: "+ data.list[24].main.humidity + "%<p>" 
    };
    function show5(data){
        return  "<h2>" + data.list[32].dt_txt + "<h2>" +
                "<h4> <img><img src='http://openweathermap.org/img/wn/" +  data.list[32].weather[0].icon + ".png'>" + data.list[32].weather[0].description + "</h4>" +
                "<p>Temperature: "+ data.list[32].main.temp + " &deg;F" + "<p>" +
                "<p>Humidity: "+ data.list[32].main.humidity + "%<p>" 
    };
});

function store(city){
    output.push(city);
    localStorage.setItem(city,JSON.stringify(output))
    console.log(localStorage)
}

function recentCity(){
    var city = $("#city").val();
    var url = forecasturl + city + "&units=imperial" + "&APPID=15e8e9167d970f296eb474a29ada33f5"
    var r=$('<input/>').attr({
            type: "button",
            value: city,
            id: city,
            href: url
    })
        $("#recentCity").append(r);
}
