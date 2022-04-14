function feetToMile(feet) {
    var mile = feet * (1/5280);
    return mile;
}
var mileCount = feetToMile(15840);
console.log("Convert Feet to Miles will be : "+mileCount);

function woodCalculator(woodQuantity) {
    var woodChair = Math.floor(woodQuantity * 1);
    if (woodChair >= 1) {
        console.log("Total Chair will be: "+woodChair);
    }
    else {
        console.log("Please give the required wood to make a complete Chair.");
    }
    

    var woodTable = Math.floor(woodQuantity * (1 / 3));
    if (woodTable >= 1) {
        console.log("Total Table will be: "+woodTable);   
    }
    else {
        console.log("Please give the required wood to make a complete Table.");
    }

    var woodHat = Math.floor(woodQuantity * (1 / 5));
    

    if (woodHat >= 1) {
        console.log("Total Hat will be: "+woodHat);
    }
    else {
        console.log("Please give the required wood to make a complete Hat.");
    }

}
woodCalculator(8);

function brickCalculator(floor)
{
    if (floor <= 10) {
        var floorFeet = floor * 15;
        var totalBricks = floorFeet * 1000;
        //console.log(floorFeet);
        //console.log(totalBricks);
        return totalBricks;
    }
    else if (floor >=11 && floor<=20) {
        var floorFeet = 0;
        for (var i = 1; i <= 10; i++){
            var floorFeet = floorFeet + 15;
        }
        for (var i = 11; i <= floor; i++){
            floorFeet = floorFeet + 12;
        }
        //console.log(floorFeet);
        var totalBricks = floorFeet * 1000;
        return totalBricks;
        //console.log(totalBricks);
    }
    else if (floor > 20) {
        var floorFeet = 0;
        for (var i = 1; i <= 10; i++){
            var floorFeet = floorFeet + 15;
        }
        for (var i = 11; i <= 20; i++){
            floorFeet = floorFeet + 12;
        }
        for (var i = 21; i <= floor; i++){
            floorFeet = floorFeet + 10;
        }
        //console.log(floorFeet);
        var totalBricks = floorFeet * 1000;
        //console.log(totalBricks);
        return totalBricks;
    }
}
var neededBricks = brickCalculator(22);
console.log("Total required bricks are "+neededBricks);

function tinyFriend(str) {
    var minLength = str[0].length;
    var tinyName = str[0];
    var sameName = str[0];
    for (var i = 0; i < str.length; i++){
        var name = str[i];
        var NameLength = name.length;
        if (NameLength < minLength) {
            minLength = NameLength;
            tinyName = name;
        }
        else if (NameLength == minLength) {
            sameName = name;
        }
    }
    if (sameName === tinyName) {
        //console.log(tinyName);
        var single = [tinyName];
        return single;
    }
    else if (sameName.length == tinyName.length) {
        //console.log(tinyName, sameName);
        var double = [tinyName, sameName]
        return double;
    }
    else if (tinyName.length < sameName.length) {
        //console.log(tinyName);
        var single = [tinyName];
        return single;
    }
}
var arrayName = ["Akib", "Sabbir Ahmed", "Hasnain Shahid", "Pulok", "Habibur"];
var tinyResult = tinyFriend(arrayName);
console.log(tinyResult);