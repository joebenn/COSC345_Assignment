locationRequest();

var clearWeather;
var rainWeather;
var cloudWeather;
var snowWeather;


function parseWeather(weatherJSONObject) {
    "use strict"
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
    "use strict"
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
        Math.floor((utcInputTime - utcToday) / minutesIn24Hours) + " " +
        time.HOURS + ": " + Math.abs(inputTime.getHours() - today.getHours());
}

function clearWeatherScreen(canvas) {
    "use strict"
    canvas.clearRect(0, 0, 200, 200);
    var imageObj = new Image();
    imageObj.onload = function () {
        canvas.drawImage(imageObj, 0, 0);
        canvas.fillText(weatherTitle.CLEAR, 55, 20);
        var iconImg = new Image();
        iconImg.src = iconImagePath.CLEAR_ICON_IMAGE;
        canvas.drawImage(iconImg, 120, 120);
        if (clearWeather) {
            canvas.fillText(labels.WHAT + clearWeather.description, 20, 60);
            canvas.fillText(labels.WHEN + clearWeather.timeUntil, 20, 100);
            canvas.fillText(labels.CELCIUS + clearWeather.temp, 20, 140);
        } else {
            canvas.fillText(notForecastMessage.CLEAR, 20, 100);
        }
    };
    imageObj.src = imagePath.CLEAR_SKY_BACKGROUND_IMAGE;
}

function rainyWeatherScreen(canvas) {
    canvas.clearRect(0, 0, 200, 200);
    var imageObj = new Image();
    imageObj.onload = function () {
        canvas.drawImage(imageObj, 0, 0);
        canvas.fillText(weatherTitle.RAIN, 55, 20);
        var iconImg = new Image();
        iconImg.src = iconImagePath.RAIN_ICON_IMAGE;
        canvas.drawImage(iconImg, 120, 120);
        if (rainWeather) {
            canvas.fillText(labels.WHAT + rainWeather.description, 20, 60);
            canvas.fillText(labels.WHEN + rainWeather.timeUntil, 20, 100);
            canvas.fillText(labels.CELCIUS + rainWeather.temp, 20, 140);
        } else {
            canvas.fillText(notForecastMessage.RAIN, 40, 100);
        }
    };
    imageObj.src = imagePath.RAIN_SKY_BACKGROUND_IMAGE;
}

function cloudyWeatherScreen(canvas) {
    "use strict"
    canvas.clearRect(0, 0, 200, 200);
    var imageObj = new Image();
    imageObj.onload = function () {
        canvas.drawImage(imageObj, 0, 0);
        canvas.fillText(weatherTitle.CLOUD, 55, 20);
        var iconImg = new Image();
        iconImg.src = iconImagePath.CLOUD_ICON_IMAGE;
        canvas.drawImage(iconImg, 120, 120);
        if (cloudWeather) {
            canvas.fillText(labels.WHAT + cloudWeather.description, 20, 60);
            canvas.fillText(labels.WHEN + cloudWeather.timeUntil, 20, 100);
            canvas.fillText(labels.CELCIUS + cloudWeather.temp, 20, 140);
        } else {
            canvas.fillText(notForecastMessage.CLOUD, 40, 100);
        }
    };
    imageObj.src = imagePath.CLOUD_SKY_BACKGROUND_IMAGE;
}

function snowyWeatherScreen(canvas) {
    "use strict"
    canvas.clearRect(0, 0, 200, 200);
    var imageObj = new Image();
    imageObj.onload = function () {
        canvas.drawImage(imageObj, 0, 0);
        canvas.fillText(weatherTitle.SNOW, 55, 20);
        var iconImg = new Image();
        iconImg.src = iconImagePath.SNOW_ICON_IMAGE;
        canvas.drawImage(iconImg, 120, 120);
        if (snowWeather) {
            canvas.fillText(labels.WHAT + snowWeather.description, 20, 60);
            canvas.fillText(labes.WHY + snowWeather.timeUntil, 20, 100);
            canvas.fillText(labels.CELCIUS + snowWeather.temp, 20, 140);
        } else {
            canvas.fillText(notForecastMessage.SNOW, 40, 100);
        }
    };
    imageObj.src = imagePath.SNOW_SKY_BACKGROUND_IMAGE;
}

function welcomeScreen(canvas) {
    "use strict"
    canvas.clearRect(0, 0, 200, 200);
    var imageObj = new Image();
    imageObj.onload = function () {
        canvas.drawImage(imageObj, 0, 0);
        canvas.fillText(TITLE, 60, 80);
        canvas.fillText(TITLE2, 48, 100);
        var iconImg = new Image();
        iconImg.src = iconImagePath.WELCOME_ICON_IMAGE;
        canvas.drawImage(iconImg, 5, 150);
    };

    imageObj.src = imagePath.WELCOME_BACKGROUND_IMAGE;
}

set_screens([
    {left: 3, right: 1, bg: colour.WHITE, fg: colour.WHITE, draw: welcomeScreen},
    {left: 0, right: 2, bg: colour.WHITE, fg: colour.WHITE, draw: clearWeatherScreen},
    {left: 1, right: 3, bg: colour.WHITE, fg: colour.WHITE, draw: rainyWeatherScreen},
    {left: 2, right: 4, bg: colour.WHITE, fg: colour.WHITE, draw: cloudyWeatherScreen},
    {left: 3, right: 0, bg: colour.WHITE, fg: colour.WHITE, draw: snowyWeatherScreen}
]);

