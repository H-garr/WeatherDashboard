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
                     <p> wind:${response.wind.speed} MPH</p>
                     <p>Temperature:${response.main.temp}°F</p>
                     <p>Humiditiy:${response.main.humidity}</p>
                     <div class ="content"></div>
                   </article>
                 </div>`
                 $("#currentday").html(htmlcode);
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
                    <p> wind:${forcast[index].wind.speed} MPH</p>
                    <p>Temperature:${forcast[index].main.temp}°F</p>
                    <p>Humidity:${forcast[index].main.humidity}</p>
                    <div class ="content"></div>
                  </article>
                </div>`
                
            }
            $("#fiveday").html(htmlcode)
            var searchhistory = JSON.parse(window.localStorage.getItem("citiez")) || []
            searchhistory.push(citiez)
            localStorage.setItem("citiez",JSON.stringify(searchhistory));
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