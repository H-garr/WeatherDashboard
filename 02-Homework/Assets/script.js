$(document).ready(function(){
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=166a433c57516f51dfab1f7edaed8413";
    $.ajax({
    url: queryURL,
    method: "GET"
    })
        .then(function(reponse){
        console.log(reponse);
        console.log("date" + response.list[0].dt_txt);
        var cityOutput = $(".citySearch").append(response.city.name);
        // $(".todaysDate").append("Todays Date"(moment().format('MMMM Do,')));
        // $(".todaysDate").append("Todays Date"(moment().format('MMMM Do,')));
        $(".div,.section,.div,.h2").text("Todays Date");
        $(".icon")  
        var iconpic = response.list[0].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconpic + ".png"
        $(".weathericon")    
        });

});