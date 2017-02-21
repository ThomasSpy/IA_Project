function skiResort(difficulty, price, terrainPark, freshSnow) {
    this.difficulty = difficulty;
    this.price = price;
    this.base = base;
    this.freshSnow = freshSnow;
    this.terrainPark = terrainPark;
}

function skier(level, priceLimit, terrainPark) {
    this.level = level;
    this.priceLimit = priceLimit;
    this.terrainPark = terrainPark;
}


function api() {
    $.ajax({
        url:"http://api.worldweatheronline.com/premium/v1/ski.ashx?key=28897923be88464da70190435171402&q=Truckee&format=json&includelocation=yes",
        type:'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: function (result) {
            console.log(result);
            getData(result)
        },
        error: function () {
            alert('Failed!');
        }
    });
}

function getData(result) {
    for (var i = 0; i < result.data.weather.length; i++) {
        console.log(result.data.weather[i].totalSnowfall_cm);
    }
}



var squaw = new skiResort("everyone",124,"some",0);
var sugarBowl = new skiResort("intermediate",109,"some",0);
var mtRose = new skiResort("everyone",115,"some",0);
var heavenly = new skiResort("everyone",135,"yes",0);
var northstar = new skiResort("begginer",140,"yes",0);
var homewood = new skiResort("begginer",80,"some",0);
var boreal = new skiResort("begginer",74,"yes",0);
var diamondPeak = new skiResort("intermediate",74,"some",0);
var kirkwood = new skiResort("everyone",107,"some",0);

var theSkier = new skier(advanced,100,yes);



function pickResort(skier) {

    //price
    //level
    //fresh snow
    //terrain park

    if((skier.level===skiResort.level) || (skiResort.level=== "everyone")) {
        console.log(skiResort);


    }



}

