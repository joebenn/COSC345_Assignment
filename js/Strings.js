var IMAGEFOLDER = "../images";
var WEATHER_TITLE = "WEATHER";
var FORECAST_TITLE = "FORECAST";
var LOADING_TITLE = "LOADING";
var API_KEY = "8056edf51377902d28bd9e53a5dd97af";
var API_URL = "http://api.openweathermap.org/data/2.5/forecast?lat={0}&lon={1}&units=metric" +
    "&APPID={2}";

var weatherType = {
    CLEAR  : "Clear",
    RAIN : "Rain",
    CLOUD  : "Clouds",
    SNOW : "Snow"
};

var weatherTitle = {
    CLEAR  : "CLEAR",
    RAIN : "RAIN",
    CLOUD  : "CLOUD",
    SNOW : "SNOW"
};

var notForecastMessage = "Not forecast";

var colour = {
    WHITE : "white",
    BLACK : "black"
};

var time = {
    HOURS : "Hours",
    DAYS : "Days"
};

var labels = {
    CELSIUS : "C˚"
};

var imagePath = {
    CLEAR_SKY_BACKGROUND_IMAGE : IMAGEFOLDER + "/blue-sky.jpg",
    RAIN_SKY_BACKGROUND_IMAGE : IMAGEFOLDER + "/rain-sky.jpg",
    CLOUD_SKY_BACKGROUND_IMAGE : IMAGEFOLDER + "/cloud-sky.jpg",
    SNOW_SKY_BACKGROUND_IMAGE : IMAGEFOLDER + "/snow-sky.jpg",
    WELCOME_BACKGROUND_IMAGE : IMAGEFOLDER + "/welcome.jpg"
};

var iconImagePath = {
    CLEAR_ICON_IMAGE : IMAGEFOLDER  + "/Weather-Sun-icon.png",
    RAIN_ICON_IMAGE : IMAGEFOLDER + "/Weather-Wet-icon.png",
    CLOUD_ICON_IMAGE : IMAGEFOLDER + "/Weather-Clouds-icon.png",
    SNOW_ICON_IMAGE : IMAGEFOLDER + "/Weather-Snow-icon.png",
    WELCOME_ICON_IMAGE : IMAGEFOLDER + "/Windows_xp.png"
};

if (!String.format) {
    String.format = function(format) {
        var args = Array.prototype.slice.call(arguments, 1);
        return format.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined'
                ? args[number] : match;
        });
    };
}

