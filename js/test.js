//this is a test file that is using Qunit testing framework

QUnit.test("API key test", function(assert){
    assert.equal(API_KEY, "8056edf51377902d28bd9e53a5dd97af", "API key is correct");
});

QUnit.test("API with wrong key", function(assert){
    assert.notEqual(API_KEY, "8056edf51502d28bd9e53a5dd97af", "API key noted as wrong. Success!!!");
});

QUnit.test("Watch height and width", function(assert){
    assert.expect(2);
    assert.equal(WATCH_WIDTH, "200", "Width is correct");
    assert.equal(WATCH_HEIGHT, "200", "height is correct");
});



QUnit.test("making sure that the strings aren't empty", function(assert){
   assert.expect(9);
   assert.notEqual(weatherType,"", "string is not equal to empty");
   assert.notEqual(weatherTitle,"", "string is not equal to empty");
   assert.notEqual(notForecastMessage,"", "string is not equal to empty");
   assert.notEqual(colour,"", "string is not equal to empty");
   assert.notEqual(time,"", "string is not equal to empty");
   assert.notEqual(labels,"", "string is not equal to empty");
   assert.notEqual(imagePath,"", "string is not equal to empty");
   assert.notEqual(iconImagePath,"", "string is not equal to empty");
   assert.notEqual(API_URL,"", "string is not equal to empty");
});


QUnit.test("Testing the city", function(assert){
    assert.expect(1);
    var latitude = -43.532054;
    var longitude = 172.636225;
    var cityName;
    var done = assert.async();
    jQuery.getJSON(String.format(API_URL, latitude, longitude, API_KEY), function (jsonObj) {
        var cityName = jsonObj.city.name;
        assert.equal("Christchurch", cityName, "city is equal to 'Christchurch'");
        done();
    });

});
