locationRequest();

var clearWeather;
var rainWeather;
var cloudWeather;
var snowWeather;
var loading = true;

function parseWeather(weatherJSONObject) {
    "use strict";
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
    loading = false;
    set_screens([
        {left: 3, right: 1, bg: colour.WHITE, fg: colour.WHITE, draw: welcomeScreen},
        {left: 0, right: 2, bg: colour.WHITE, fg: colour.WHITE, draw: clearWeatherScreen},
        {left: 1, right: 3, bg: colour.WHITE, fg: colour.WHITE, draw: rainyWeatherScreen},
        {left: 2, right: 4, bg: colour.WHITE, fg: colour.WHITE, draw: cloudyWeatherScreen},
        {left: 3, right: 0, bg: colour.WHITE, fg: colour.WHITE, draw: snowyWeatherScreen}
    ]);
}

function calcTimeDifference(inputTime) {
    "use strict";
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

    if (Math.floor((utcInputTime - utcToday) / minutesIn24Hours) > 0) {
        return Math.floor((utcInputTime - utcToday) / minutesIn24Hours) + " " +
            time.DAYS + " and " + Math.abs(inputTime.getHours() - today.getHours()) + " "
            + time.HOURS;
    } else {
        return Math.abs(inputTime.getHours() - today.getHours()) + " " + time.HOURS;
    }
}

function fillTextCenterHorizontal(canvas, text, yCoord){
    canvas.fillText(
        text,
        WATCH_WIDTH/2 - canvas.measureText(text).width/2,
        yCoord);
}

function drawWeatherScreen(canvas, backgroundImg, iconImg, weatherObj, title){
    canvas.clearRect(0, 0, WATCH_WIDTH, WATCH_HEIGHT);
    canvas.drawImage(backgroundImg, 0, 0);
    fillTextCenterHorizontal(canvas, title, 30);
    canvas.drawImage(iconImg, 120, 120);
    if (weatherObj) {
        fillTextCenterHorizontal(canvas, weatherObj.description, 100);
        fillTextCenterHorizontal(canvas, weatherObj.timeUntil, 120);
        fillTextCenterHorizontal(canvas, weatherObj.temp + labels.CELSIUS, 140);
    } else {
        fillTextCenterHorizontal(canvas, notForecastMessage, 120);
    }
}

function clearWeatherScreen(canvas) {
    "use strict";
    var backgroundImg = new Image();
    var iconImg = new Image();
    var iconLoaded = false;
    var backgroundLoaded = false;
    iconImg.src = iconImagePath.CLEAR_ICON_IMAGE;
    backgroundImg.src = imagePath.CLEAR_SKY_BACKGROUND_IMAGE;

    backgroundImg.onload = function () {
        if (iconLoaded){
            drawWeatherScreen(canvas,
                backgroundImg,
                iconImg,
                clearWeather,
                weatherTitle.CLEAR
            );
        }
        backgroundLoaded = true;
    };

    iconImg.onload = function () {
        if (backgroundLoaded){
            drawWeatherScreen(canvas,
                backgroundImg,
                iconImg,
                clearWeather,
                weatherTitle.CLEAR
            );
        }
        iconLoaded = true;
    };
}

function rainyWeatherScreen(canvas) {
    var backgroundImg = new Image();
    var iconImg = new Image();
    var iconLoaded = false;
    var backgroundLoaded = false;
    iconImg.src = iconImagePath.RAIN_ICON_IMAGE;
    backgroundImg.src = imagePath.RAIN_SKY_BACKGROUND_IMAGE;

    backgroundImg.onload = function () {
        if (iconLoaded){
            drawWeatherScreen(canvas,
                backgroundImg,
                iconImg,
                rainWeather,
                weatherTitle.RAIN
            );
        }
        backgroundLoaded = true;
    };

    iconImg.onload = function () {
        if (backgroundLoaded){
            drawWeatherScreen(canvas,
                backgroundImg,
                iconImg,
                rainWeather,
                weatherTitle.RAIN
            );
        }
        iconLoaded = true;
    };
}

function cloudyWeatherScreen(canvas) {
    "use strict";
    var backgroundImg = new Image();
    var iconImg = new Image();
    var iconLoaded = false;
    var backgroundLoaded = false;
    iconImg.src = iconImagePath.CLOUD_ICON_IMAGE;
    backgroundImg.src = imagePath.CLOUD_SKY_BACKGROUND_IMAGE;

    backgroundImg.onload = function () {
        if (iconLoaded){
            drawWeatherScreen(canvas,
                backgroundImg,
                iconImg,
                cloudWeather,
                weatherTitle.CLOUD
            );
        }
        backgroundLoaded = true;
    };

    iconImg.onload = function () {
        if (backgroundLoaded){
            drawWeatherScreen(canvas,
                backgroundImg,
                iconImg,
                cloudWeather,
                weatherTitle.CLOUD
            );
        }
        iconLoaded = true;
    };
}

function snowyWeatherScreen(canvas) {
    "use strict";
    var backgroundImg = new Image();
    var iconImg = new Image();
    var iconLoaded = false;
    var backgroundLoaded = false;
    iconImg.src = iconImagePath.SNOW_ICON_IMAGE;
    backgroundImg.src = imagePath.SNOW_SKY_BACKGROUND_IMAGE;

    backgroundImg.onload = function () {
        if (iconLoaded){
            drawWeatherScreen(canvas,
                backgroundImg,
                iconImg,
                snowWeather,
                weatherTitle.SNOW
            );
        }
        backgroundLoaded = true;
    };

    iconImg.onload = function () {
        if (backgroundLoaded){
            drawWeatherScreen(canvas,
                backgroundImg,
                iconImg,
                snowWeather,
                weatherTitle.SNOW
            );
        }
        iconLoaded = true;
    };
}

function welcomeScreen(canvas) {
    "use strict";
    var backgroundImg = new Image();
    var iconImg = new Image();
    var iconLoaded = false;
    var backgroundLoaded = false;

    canvas.clearRect(0, 0, WATCH_WIDTH, WATCH_HEIGHT);

    backgroundImg.onload = function () {
        if (iconLoaded){
            drawScreen();
        }
        backgroundLoaded = true;
    };

    iconImg.onload = function () {
        if (backgroundLoaded){
            drawScreen();
        }
        iconLoaded = true;
    };

    function drawScreen() {
        canvas.drawImage(backgroundImg, 0, 0);
        fillTextCenterHorizontal(canvas,WEATHER_TITLE, 80);
        fillTextCenterHorizontal(canvas,FORECAST_TITLE, 100);
        if (loading){
            fillTextCenterHorizontal(canvas,
                LOADING_TITLE + " " + FORECAST_TITLE, 140);
        }
        canvas.drawImage(iconImg, 5, 150);
    }

    backgroundImg.src = imagePath.WELCOME_BACKGROUND_IMAGE;
    iconImg.src = iconImagePath.WELCOME_ICON_IMAGE;
}

set_screens([
    {left: 3, right: 1, bg: colour.WHITE, fg: colour.WHITE, draw: welcomeScreen}
    ]);
