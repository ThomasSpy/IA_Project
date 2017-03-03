function SkiResort(name, coordinates, difficulty, price, terrainPark, freshSnow) {
    this.name = name;
    this.coordinates = coordinates;
    this.difficulty = difficulty;
    this.price = price;
    this.terrainPark = terrainPark;
    this.freshSnow = freshSnow;
}

function Skier(level, priceLimit, terrainPark) {
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

var alpineMeadows = new SkiResort("Alpine Meadows", "39.153309, -120.236276", 0,124,2,0);
var squaw = new SkiResort("Squaw", "39.153309, -120.236276", 0,124,2,0);
var mtRose = new SkiResort("Mount Rose", "39.320654, -119.884450", 0,115,2,0);
var northstar = new SkiResort("Northstar", "39.257063, -120.132625", 1,140,3,0);
var homewood = new SkiResort("Homewood", "39.080040, -120.169578", 1,80,2,0);
var boreal = new SkiResort("Boreal", "39.332796, -120.349905", 1,74,2,0);
var kirkwood = new SkiResort("Kirkwood", "38.677414, -120.069687", 0,107,2,0);

var resorts = [alpineMeadows, squaw, mtRose, northstar, homewood, boreal, kirkwood];

var theSkier = new Skier(document.getElementById("skierLevel").value, document.getElementById("priceLimit").value, document.getElementById("terrainPark").value);


for(var i=0; i<resorts.length; i++) {
    api(resorts[i]);
}

function api(resort) {
    $.ajax({
        url:"http://api.worldweatheronline.com/premium/v1/ski.ashx?key=28897923be88464da70190435171402&q=" + resort.coordinates + "&format=json&includelocation=yes",
        type:'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: function (result) {
            resort.freshSnow = result.data.weather[1].totalSnowfall_cm;
        //console.log(result);
        },
        error:   function () {
            alert('Failed!');
        }
    });
}





function bestResort() {
    console.log(theSkier);

    for(var i=0; i<resorts.length; i++) {
        if ((theSkier.level >= resorts[i].difficulty) || (resorts[i].difficulty === 0)) {

            if (theSkier.terrainPark <= resorts[i].terrainPark) {


                if(theSkier.priceLimit >= resorts[i].price) {
                    console.log( resorts[i].name + " is a good resort for you in your price range")

                }
                else{
                    console.log( resorts[i].name + " is a good resort for you but above your price range");
                }
            }
        }
    }
}






function bestWeather() {


}