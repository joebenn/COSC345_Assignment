//this is a test file that is using Qunit testing framework

QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test("one test", function(assert){
    assert.equal(1, "1","string 1 and 1 have the same value");
});

QUnit.test("API key test", function(assert){
    assert.equal(API_KEY, "8056edf51377902d28bd9e53a5dd97af", "API key is correct");
});

