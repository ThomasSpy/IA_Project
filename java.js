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

// 1 = not much terrain park/never use it
// 2 = a good amount of terrain park/will use it
// 3 = a lot of terrain park/mainly ride the terrain park

var alpineMeadows = new SkiResort("Alpine Meadows", "39.153309, -120.236276", 0,124,2,0);
var squaw = new SkiResort("Squaw", "39.153309, -120.236276", 0,124,2,0);
var mtRose = new SkiResort("Mount Rose", "39.320654, -119.884450", 0,115,2,0);
var northstar = new SkiResort("Northstar", "39.257063, -120.132625", 0,140,3,0);
var homewood = new SkiResort("Homewood", "39.080040, -120.169578", 1,80,1,0);
var boreal   = new SkiResort("Boreal", "39.332796, -120.349905", 1,74,2,0);
var kirkwood = new SkiResort("Kirkwood", "38.677414, -120.069687", 0,107,2,0);

var resorts = [alpineMeadows, squaw, mtRose, northstar, homewood, boreal, kirkwood];


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
            var snowfall = 0;
                for(var i=0; i<=6;i++) {
                    snowfall = snowfall + parseFloat(result.data.weather[i].totalSnowfall_cm);
                }
            resort.freshSnow = Math.round(snowfall);
        },
        error:   function () {
            alert('Failed!');
        }
    });
}




function bestResort() {
    var theSkier = new Skier(document.getElementById("skierLevel").value, document.getElementById("priceLimit").value, document.getElementById("terrainPark").value);
    var goodResorts = [];
    var expensiveResorts = [];


    for (var i = 0; i < resorts.length; i++) {
        if (parseInt(theSkier.terrainPark) <= resorts[i].terrainPark) {

            if ((parseInt(theSkier.level) === resorts[i].difficulty) || (resorts[i].difficulty === 0)) {

                if (theSkier.priceLimit >= resorts[i].price) {
                    goodResorts.push({name: resorts[i].name, snowfall: resorts[i].freshSnow, price: resorts[i].price});
                }
                else {
                    expensiveResorts.push({name: resorts[i].name, snowfall: resorts[i].freshSnow, price: resorts[i].price});
                }
            }
        }
    }

    goodResorts.sort(function (a, b) {
        return b.snowfall - a.snowfall;
    });

    expensiveResorts.sort(function (a, b) {
        return b.snowfall - a.snowfall;
    });



    if (goodResorts.length > 0) {
        document.getElementById("outputa").innerHTML = "Best Resort in your Price Range:";
        document.getElementById("output1a").innerHTML = goodResorts[0].name;
        document.getElementById("output2a").innerHTML = "Snowfall in the Next Week:";
        document.getElementById("output3a").innerHTML = (goodResorts[0].snowfall + " cm");
        document.getElementById("output4a").innerHTML = "Price:";
        document.getElementById("output5a").innerHTML = ("$" + goodResorts[0].price);
    }else {
        document.getElementById("outputa").innerHTML = "Best Resort in your Price Range:";
        document.getElementById("output1a").innerHTML = "none";
        document.getElementById("output2a").innerHTML = "";
        document.getElementById("output3a").innerHTML = "";
        document.getElementById("output4a").innerHTML = "";
        document.getElementById("output5a").innerHTML = "";
    }


    if (expensiveResorts.length > 0) {
        document.getElementById("outputb").innerHTML = "Best Resort above your Price Range:";
        document.getElementById("output1b").innerHTML = expensiveResorts[0].name;
        document.getElementById("output2b").innerHTML = "Snowfall in the Next Week:";
        document.getElementById("output3b").innerHTML = (expensiveResorts[0].snowfall + " cm");
        document.getElementById("output4b").innerHTML = "Price:";
        document.getElementById("output5b").innerHTML = ("$" + expensiveResorts[0].price);
    }else {
        document.getElementById("outputb").innerHTML = "";
        document.getElementById("output1b").innerHTML = "";
        document.getElementById("output2b").innerHTML = "";
        document.getElementById("output3b").innerHTML = "";
        document.getElementById("output4b").innerHTML = "";
        document.getElementById("output5b").innerHTML = "";
    }
}