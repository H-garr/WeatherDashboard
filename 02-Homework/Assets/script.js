$(document).ready(function () {
    function currentforcast(city) {
            var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=166a433c57516f51dfab1f7edaed8413&units=imperial`;
            $.ajax({
                url: queryURL,
                method: "GET"
            })
            .then(function (response) {
                console.log(response);
                var htmlcode = `
                <div class="tile is-parent ">
                   <article class="tile is-child box">
                    <p class="title">${response.name}</p> 
                    <figure class="image is-2by1"><img src='https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png'></figure>
                     <p class="subtitle">${response.weather[0].main}</p>
                     <p> wind:${response.wind.speed}</p>
                     <p>Temperature:${response.main.temp}</p>
                     <p>Temperature:${response.main.humidity}</p>
                     <div class ="content"></div>
                   </article>
                 </div>`
                 $("#currentday").html(htmlcode);
                // console.log("date" + response.list[0].dt_txt);
                // var cityOutput = $(".citySearch").append(response.city.name);
                // // $(".todaysDate").append("Todays Date"(moment().format('MMMM Do,')));
                // // $(".todaysDate").append("Todays Date"(moment().format('MMMM Do,')));
                // $(".div,.section,.div,.h2").text("Todays Date");
                // $(".icon")
                // var iconpic = response.list[0].weather[0].icon;
                // var iconurl = "http://openweathermap.org/img/w/" + iconpic + ".png"
                // $(".weathericon")
            });

}
function fivedayforcast(city){
    
    var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=166a433c57516f51dfab1f7edaed8413&units=imperial`;
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
            var forcast = response.list
            var htmlcode = "";
            for (let index = 0; index < forcast.length; index=index+8) {
               htmlcode +=`
               <div class="tile is-parent ">
                  <article class="tile is-child box">
                   <p class="title">${forcast[index].dt_txt}</p> 
                   <figure class="image is-2by1"><img src='https://openweathermap.org/img/wn/${forcast[index].weather[0].icon}@2x.png'></figure>
                    <p class="subtitle">${forcast[index].weather[0].main}</p>
                    <p> wind:${forcast[index].wind.speed}</p>
                    <p>Temperature:${forcast[index].main.temp}</p>
                    <p>Temperature:${forcast[index].main.humidity}</p>
                    <div class ="content"></div>
                  </article>
                </div>`
                
            }
            $("#fiveday").html(htmlcode)
            var searchhistory = JSON.parse(localStorage.getItem("citiez")) || []
            searchhistory.push(citiez)
            localStorage.setItem("citiez",JSON.stringify(searchhistory));
            console.log(searchhistory,"Local");
        });
}


$("#city-form").on("submit", function (event) {
    event.preventDefault()
    var userinput = $("#city-input").val()
    console.log(userinput)
    fivedayforcast(userinput);
    currentforcast(userinput);
})

})