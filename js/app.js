locationRequest();

var clearWeather;
var rainWeather;
var cloudWeather;
var snowWeather;

function parseWeather(weatherJSONObject) {
    var weatherObject = ({
        description: weatherJSONObject.description,
        timeUntil: calcTimeDifference(weatherJSONObject.date_time),
        temp: weatherJSONObject.temp
    });

    if (!clearWeather && weatherJSONObject.main === weatherType.CLEAR) {
        clearWeather = weatherObject;
    } else if (!rainWeather && weatherJSONObject.main === weatherType.RAIN) {
        rainWeather = weatherObject;
    } else if (!cloudWeather && weatherJSONObject.main === weatherType.CLOUD) {
        cloudWeather = weatherObject;
    } else if (!snowWeather && weatherJSONObject.main === weatherType.SNOW) {
        snowWeather = weatherObject;
    }
}

function calcTimeDifference(inputTime) {
    var today = new Date();
    var minutesIn24Hours = 86400000;
    var utcToday = Date.UTC(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
    );
    var utcInputTime = Date.UTC(
        inputTime.getFullYear(),
        inputTime.getMonth(),
        inputTime.getDate()
    );

    return time.DAYS + ": " +
        Math.floor((utcInputTime - utcToday) / minutesIn24Hours) + time.HOURS +
        ": " + Math.abs(inputTime.getHours() - today.getHours());
}

function clearWeatherScreen(canvas) {
    canvas.clearRect(0, 0, 200, 200);
    canvas.fillText(weatherTitle.CLEAR, 55, 20);
    if (clearWeather) {
        canvas.fillText(clearWeather.description, 60, 60);
        canvas.fillText(clearWeather.timeUntil, 60, 100);
        canvas.fillText(clearWeather.temp, 60, 140);
    } else {
        canvas.fillText(notForecastMessage.CLEAR, 60, 60);
    }
}

function rainyWeatherScreen(canvas) {
    canvas.clearRect(0, 0, 200, 200);
    canvas.fillText(weatherTitle.RAIN, 55, 20);
    if (rainWeather) {
        canvas.fillText(rainWeather.description, 60, 60);
        canvas.fillText(rainWeather.timeUntil, 60, 100);
        canvas.fillText(rainWeather.temp, 60, 140);
    } else {
        canvas.fillText(notForecastMessage.RAIN, 60, 60);
    }
}

function cloudyWeatherScreen(canvas) {
    canvas.clearRect(0, 0, 200, 200);
    canvas.fillText(weatherTitle.CLOUD, 55, 20);
    if (cloudWeather) {
        canvas.fillText(cloudWeather.description, 60, 60);
        canvas.fillText(cloudWeather.timeUntil, 60, 100);
        canvas.fillText(cloudWeather.temp, 60, 140);
    } else {
        canvas.fillText(notForecastMessage.CLOUD, 60, 60);
    }
}

function snowyWeatherScreen(canvas) {
    canvas.clearRect(0, 0, 200, 200);
    canvas.fillText(weatherTitle.SNOW, 55, 20);
    if (snowWeather) {
        canvas.fillText(snowWeather.description, 60, 60);
        canvas.fillText(snowWeather.timeUntil, 60, 100);
        canvas.fillText(snowWeather.temp, 60, 140);
    } else {
        canvas.fillText(notForecastMessage.SNOW, 60, 60);
    }
}
function welcomeScreen(c) {
    c.clearRect(0, 0, 200, 200);
    c.fillText(TITLE, 55, 20);
}

set_screens([
    {left: -1, right: 1, bg: colour.WHITE, fg: colour.BLACK, draw: welcomeScreen},
    {left: 0, right: 2, bg: colour.WHITE, fg: colour.BLACK, draw: clearWeatherScreen},
    {left: 1, right: 3, bg: colour.WHITE, fg: colour.BLACK, draw: rainyWeatherScreen},
    {left: 2, right: 4, bg: colour.WHITE, fg: colour.BLACK, draw: cloudyWeatherScreen},
    {left: 3, right: -1, bg: colour.WHITE, fg: colour.BLACK, draw: snowyWeatherScreen}
]);
