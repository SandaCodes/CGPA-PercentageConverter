function convertToPercent(){

  var x = document.querySelectorAll("input");

  var y = document.querySelectorAll("input");

    var yourGp = x[0].value;

    var maxGp = y[1].value;

    if (isNaN(yourGp) == false && isNaN(maxGp) == false) {

      var yourCgpa = yourGp/maxGp;

      var yourPercent = Math.floor(yourCgpa * 100);

      alert("You have " + yourPercent + "%");
    }
    else {
      alert("Input numbers only");
    }
}
