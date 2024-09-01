geoLocation();
let lat;
let lon;
function geoLocation(){
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }
    function showPosition(data){
        console.log(data);
        console.log(data.coords.latitude);
        
       lat=data.coords.latitude;
       lon=data.coords.longitude;
        let WEATHER_API_LON_LAT=`https://api.weatherapi.com/v1/search.json?key=84a486dbf73c4638baa51830242908&q=${lat},${lon}`
         console.log("Lat"+lat);
      
         fetch(WEATHER_API_LON_LAT).then((res)=>res.json()).then((data)=>{
          console.log(data);
          
            let location = data[0].name;
            console.log(location);
            
            if( $inputLocation.val()===""){
                $inputLocation.val(location);
                console.log($inputLocation.val());
                
                information();
            }
         })
    }
}


            

const $inputLocation = $("#weatherTabSearchLocationTxt");
console.log( $inputLocation.val());

// console.log(inputlocation.val()=="");

const tempretureTxt = $("#TempretureTxtSideTab")


WEATHER_API = `https://api.weatherapi.com/v1/current.json?key=84a486dbf73c4638baa51830242908&q=`;


function information(){
    fetch(WEATHER_API +  $inputLocation.val()).then((res) => res.json()).then((data) => {
        console.log(data);
        $("#nextIcon").click(function () {
            let tempreture = Math.round(`${data.current.temp_f}`);
            $("#TempretureTxtSideTab").text(tempreture + "°F");
        });
        $("#previousIcon").click(function () {
            let tempreture = Math.round(`${data.current.temp_c}`)
            tempretureTxt.text(tempreture + "°C");

        });
        let tempreture = Math.round(`${data.current.temp_c}`)
        tempretureTxt.text(tempreture + "°C");
        $("#locationSideTabTxt").html(`<img id="locationImg" src="img/lcation.png" alt=""> ${data.location.name},${data.location.country} `);
        $("#weathercondition").html(`<img src="img/icons8-thermometer-48 (1).png" alt="" id="markIcon"> ${data.current.condition.text}`);
        const lastupdated = new Date(data.current.last_updated);
        //-----------------Greeting Logic----------------
        const now=new Date()
        var hrs = now.getHours();
        var mins = now.getMinutes();

        if (hrs > 0 && hrs < 12) {
            $("#wish").text("Good Morning");
            $("#wishImg").attr("src", "img/morning.jpg");
        } else if (hrs >= 12 && hrs < 18) {
            $("#wish").text("Good Afternoon");
            $("#wishImg").attr("src", "img/sun.jpg");
        } else {
            $("#wish").text("Good Night");
            $("#wishImg").attr("src", "img\night.png");
        }
        const formatdate = new Intl.DateTimeFormat(`en-US`, {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        }).format(lastupdated);
        $("#currentdate-time").text(`${formatdate}`);
        $("#CurrentLocWCImg").attr("src", `${data.current.condition.icon}`);
        //code next will be here
        $("#humidTxt").text(`${data.current.humidity}%`);
        const wind = `${data.current.wind_kph}`;
        let correctwind = Math.round(wind);
        $("#windtxt").text(correctwind + "km/h")
        lattiude = `${data.location.lat}`;
        lon = `${data.location.lon}`;
        SUNRISE_SUNSET_API = `https://api.sunrisesunset.io/json?lat=${lattiude}&lng=${lon}`;
        fetch(SUNRISE_SUNSET_API).then((res) => res.json()).then((data) => {
            $("#sunRise").text(`${data.results.sunrise}`);
            $("#sunset").text(`${data.results.sunset}`);
        });
        $("#cloudstxt").text(`${data.current.cloud}`);
        $("#UVindexTxt").text(`${data.current.uv}`)
        let feelTemp=Math.round(`${data.current.feelslike_c}`);
        $("#feelsLikeTxt").text(feelTemp+"°C");
        let getDay = `${data.location.localtime}`;
        const setdate = new Date(getDay);
        console.log("setdate:" + setdate);

        let date = setdate.getDate();
        let month = setdate.getMonth();
        let year = setdate.getFullYear();
        const headers = [
            "#headerMon",
            "#headerTue",
            "#headerWed",
            "#headerThu",
            "#headerFri"

        ]
        const temperatures = [
            "#tempretureMonTxt",
            "#tempretureTueTxt",
            "#tempretureWedTxt",
            "#tempretureThuTxt",
            "#tempretureFriTxt"
        ];
        const images = [
            "#MondayImg",
            "#TuesdayImg",
            "#WednesdayImg",
            "#ThursdayImg",
            "#FridayImg",

        ]
        WEATHER_API_FUTURE = `https://api.weatherapi.com/v1/marine.json?key=84a486dbf73c4638baa51830242908&q=${ $inputLocation.val()}&dt=`;
        WEATHER_API_HISTORY=`https://api.weatherapi.com/v1/history.json?key=84a486dbf73c4638baa51830242908&q=${ $inputLocation.val()}&dt=`;
        if ((month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) && (date == 31 || date == 30 || date == 29 || date == 28 || date == 27 || date == 26)) {
            handleFutureDates(year, month, date, 5);
        } else if ((month == 3 || month == 5 || month == 8 || month == 10) && (date == 30 || date == 29 || date == 28 || date == 27 || date == 26 || date == 25)) {
            handleFutureDates(year, month, date, 5);

        } else if (month == 1 && (date == 28 || date == 29)) {
            handleFutureDates(year, month, date, 5);
        } else {
            handleFutureDates(year, month, date, 5);
        }
        $("#previousclickIcon").click(function(){
            $("#txtWeatherChange").html(`Previous Weather`);
            if ((month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) && (date == 31 || date == 30 || date == 29 || date == 28 || date == 27 || date == 26)) {
            handlePastDates(year, month, date, 5);
        } else if ((month == 3 || month == 5 || month == 8 || month == 10) && (date == 30 || date == 29 || date == 28 || date == 27 || date == 26 || date == 25)) {
           handlePastDates(year, month, date, 5);

        } else if (month == 1 && (date == 28 || date == 29)) {
           handlePastDates(year, month, date, 5);
        } else {
            handlePastDates(year, month, date, 5);
        }
function handlePastDates(year, month, date, numberOfDays) {
            let pastDates = [];
            for (let i = 1; i <= numberOfDays;i++) {
                let pastDate = new Date(year, month, date - i);

                let pastYear = pastDate.getFullYear();
                let pastMonth = pastDate.getMonth()+1;
                let pastDay = pastDate.getDate();

                let paddedMonth = pastMonth.toString().padStart(2, '0');
                let paddedDay = pastDay.toString().padStart(2, '0');

                let setDate = `${pastYear}-${paddedMonth}-${paddedDay}`;
               pastDates.push(setDate);
            }


             pastDates.forEach((setDate, index) => {
                const weeksetDate = new Date(setDate);
                const formatdate = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(weeksetDate);

                fetch(  WEATHER_API_HISTORY + setDate)
                    .then((res) => res.json())
                    .then((data) => {
                        $(headers[index]).text(formatdate);
                        let maxTemp = Math.round(`${data.forecast.forecastday[0].day.maxtemp_c}`);
                        $(temperatures[index]).text(maxTemp + "°C");
                        $(images[index]).attr("src", `${data.forecast.forecastday[0].day.condition.icon}`);
                    });
            });
        }
            $("#nextclickIcon").click(function(){
                $("#txtWeatherChange").html(`Upcoming Weather`);
                if ((month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) && (date == 31 || date == 30 || date == 29 || date == 28 || date == 27 || date == 26)) {
            handleFutureDates(year, month, date, 5);
        } else if ((month == 3 || month == 5 || month == 8 || month == 10) && (date == 30 || date == 29 || date == 28 || date == 27 || date == 26 || date == 25)) {
            handleFutureDates(year, month, date, 5);

        } else if (month == 1 && (date == 28 || date == 29)) {
            handleFutureDates(year, month, date, 5);
        } else {
            handleFutureDates(year, month, date, 5);
        }
            });
        });
        function handleFutureDates(year, month, date, numberOfDays) {
            let futureDates = [];
            for (let i = 1; i <= numberOfDays; i++) {
                let futureDate = new Date(year, month, date + i);

                let futureYear = futureDate.getFullYear();
                let futureMonth = futureDate.getMonth() + 1;
                let futureDay = futureDate.getDate();

                let paddedMonth = futureMonth.toString().padStart(2, '0');
                let paddedDay = futureDay.toString().padStart(2, '0');

                let setDate = `${futureYear}-${paddedMonth}-${paddedDay}`;
                futureDates.push(setDate);
            }


            futureDates.forEach((setDate, index) => {
                const weeksetDate = new Date(setDate);
                const formatdate = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(weeksetDate);

                fetch(WEATHER_API_FUTURE + setDate)
                    .then((res) => res.json())
                    .then((data) => {
                        $(headers[index]).text(formatdate);
                        let maxTemp = Math.round(`${data.forecast.forecastday[0].day.maxtemp_c}`);
                        $(temperatures[index]).text(maxTemp + "°C");
                        $(images[index]).attr("src", `${data.forecast.forecastday[0].day.condition.icon}`);
                    });
            });
        }

    });

}

