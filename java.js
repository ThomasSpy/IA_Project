function skiResort(difficulty, price, terrainPark, base, freshSnow) {
    this.difficulty = difficulty;
    this.price = price;
    this.base = base;
    this.freshSnow = freshSnow;
    this.terrainPark = terrainPark;
}



function skier(level, priceLimit, terrainPark) {
    this.level = level;
    this.priceLimit = priceLimit;
}



// var squaw = new skiResort("everyone",124,"some", , );
// var sugarBowl = new skiResort("intermediate",109,"some", , );
// var mtRose = new skiResort("everyone",115,"some", , );
// var heavenly = new skiResort("everyone",135,"yes", , );
// var northstar = new skiResort("begginer",140,"yes", , );
// var homewood = new skiResort("begginer",80,"some", , );
// var boreal = new skiResort("begginer",74,"yes", , );
// var diamondPeak = new skiResort("intermediate",74,"some", , );
// var kirkwood = new skiResort("everyone",107,"some", , );


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
    console.log(result.data.request);
}
