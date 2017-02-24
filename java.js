function skiResort(name, difficulty, price, terrainPark, freshSnow) {
    this.name = name;
    this.difficulty = difficulty;
    this.price = price;
    this.freshSnow = freshSnow;
    this.terrainPark = terrainPark;
}

function skier(level, priceLimit, terrainPark) {
    this.level = level;
    this.priceLimit = priceLimit;
    this.terrainPark = terrainPark;
}


// 1 = beginner skier/resort
// 2 = intermediate skier/resort
// 3 = advanced skier/resort
// 0 = resort for all levels

// 1 = no terrain park/never use it
// 2 = some terrain park/will use it
// 3 = a lot of terrain park/mainly ride the terrain park

var alpineMeadows = new skiResort("Alpine Meadows",0,124,1,0);
var squaw = new skiResort("Squaw",0,124,1,0);
var sugarBowl = new skiResort("Sugar bowl",2,109,1,0);
var mtRose = new skiResort("Mount Rose",0,115,1,0);
var heavenly = new skiResort("Heavenly",0,135,2,0);
var northstar = new skiResort("Northstar",1,140,2,0);
var homewood = new skiResort("Homewood",1,80,1,0);
var boreal = new skiResort("Boreal",1,74,2,0);
var diamondPeak = new skiResort("Diamond Peak",2,74,1,0);
var kirkwood = new skiResort("Kirkwood",0,107,1,0);

var resorts = [squaw, sugarBowl, mtRose, heavenly, northstar, homewood, boreal, diamondPeak, kirkwood];


api();

//"alpine Meadows"  -> Alpine Meadows
//"alpine Meadows"  -> Squaw
//"incline village" -> Mt Rose
//"zephyr cove"     -> Homewood
//"kit carson"      -> Kirkwood
//"carnelian bay"   -> Northstar
//"                 -> Heavenly
//"                 -> Diamond Peak
//"                 -> Sugar Bowl



var theSkier = new skier(3,100,1);

function api(city) {
    $.ajax({
        url:"http://api.worldweatheronline.com/premium/v1/ski.ashx?key=28897923be88464da70190435171402&format=json&includelocation=yes&q=" + city,
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
        console.log(result.data.nearest_area[0].areaName[0].value);
}




function pickResort() {
    console.log(theSkier);

    for (var i=0; i<resorts.length; i++) {
        console.log(resorts[i]);

        if (theSkier.priceLimit >= resorts[i].price) {

            if ((theSkier.level === resorts[i].difficulty) || (resorts[i].difficulty === 0)) {
                console.log("hello");


                if (theSkier.terrainPark <= resorts[i].terrainPark) {
                    //rank in order of fresh snow fall
                }
            }
        }
    }
}