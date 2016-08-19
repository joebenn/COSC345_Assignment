locationRequest();

var clearWeather;
var rainWeather;
var cloudWeather;
var snowWeather;

var backgroundWeatherImages = [];
var welcomeBackgroundImage;

function loadWeatherBackgrounds(){
    var clear = new Image();
    var rain = new Image();
    var cloud = new Image();
    var snow = new Image();

    clear.src = imagePath.CLEAR_SKY_BACKGROUND_IMAGE;
    rain.src = imagePath.RAIN_SKY_BACKGROUND_IMAGE;
    cloud.src = imagePath.CLOUD_SKY_BACKGROUND_IMAGE;
    snow.src = imagePath.SNOW_SKY_BACKGROUND_IMAGE;

    backgroundWeatherImages.push(clear);
    backgroundWeatherImages.push(rain);
    backgroundWeatherImages.push(cloud);
    backgroundWeatherImages.push(snow);
}

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
}

function loadScreens() {
    set_screens([
        {left: 2, right: 1, bg: colour.WHITE, fg: colour.WHITE, draw: clearWeatherScreen},
        {left: 0, right: 2, bg: colour.WHITE, fg: colour.WHITE, draw: rainyWeatherScreen},
        {left: 1, right: 3, bg: colour.WHITE, fg: colour.WHITE, draw: cloudyWeatherScreen},
        {left: 2, right: 0, bg: colour.WHITE, fg: colour.WHITE, draw: snowyWeatherScreen}
    ]);
}

function loadWelcomeScreen() {
    var welcome = new Image();

    welcome.onload = function () {
        if (!screens){
            welcomeBackgroundImage = welcome;
            set_screens([
                {left: 0, right: 0, bg: colour.WHITE, fg: colour.WHITE, draw: welcomeScreen}
            ]);
        }
    };

    welcome.src = imagePath.WELCOME_BACKGROUND_IMAGE;
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

function drawBackground(canvas, img){
    canvas.clearRect(0, 0, WATCH_WIDTH, WATCH_HEIGHT);
    canvas.drawImage(img, 0, 0);
}

function drawForeground(canvas, iconImg, weatherObj, title){
    fillTextCenterHorizontal(canvas, title, 40);
    canvas.drawImage(iconImg, 135, 135);
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
    var iconImg = new Image();
    iconImg.src = iconImagePath.CLEAR_ICON_IMAGE;
    drawBackground(canvas, backgroundWeatherImages[1]);
    iconImg.onload = function () {
            drawForeground(canvas,
                iconImg,
                clearWeather,
                weatherTitle.CLEAR
            );
    };
}

function rainyWeatherScreen(canvas) {
    "use strict";
    var iconImg = new Image();
    iconImg.src = iconImagePath.RAIN_ICON_IMAGE;
    drawBackground(canvas, backgroundWeatherImages[2]);
    iconImg.onload = function () {
        drawForeground(canvas,
            iconImg,
            rainWeather,
            weatherTitle.RAIN
        );
    };
}

function cloudyWeatherScreen(canvas) {
    "use strict";
    var iconImg = new Image();
    iconImg.src = iconImagePath.CLOUD_ICON_IMAGE;
    drawBackground(canvas, backgroundWeatherImages[3]);
    iconImg.onload = function () {
        drawForeground(canvas,
            iconImg,
            cloudWeather,
            weatherTitle.CLOUD
        );
    };
}

function snowyWeatherScreen(canvas) {
    "use strict";
    var iconImg = new Image();
    iconImg.src = iconImagePath.SNOW_ICON_IMAGE;
    drawBackground(canvas, backgroundWeatherImages[4]);
    iconImg.onload = function () {
        drawForeground(canvas,
            iconImg,
            snowWeather,
            weatherTitle.SNOW
        );
    };
}

function welcomeScreen(canvas) {
    "use strict";
    var iconImg = new Image();
    drawBackground(canvas, welcomeBackgroundImage);
    iconImg.onload = function () {
        fillTextCenterHorizontal(canvas, WEATHER_TITLE, 80);
        fillTextCenterHorizontal(canvas, FORECAST_TITLE, 100);
        canvas.drawImage(iconImg, 5, 150);
    };
    iconImg.src = iconImagePath.WELCOME_ICON_IMAGE;
}

loadWelcomeScreen();
loadWeatherBackgrounds();
