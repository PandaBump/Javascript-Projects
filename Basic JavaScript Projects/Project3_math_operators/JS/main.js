var z = Math.Random();

function calculatingAdd() {
    var add = 2 + 2;
    document.getElementById("Math") .innerHTML = showResults
  }
  function calculatingSub() {
    var sub = 8 - 4;
    document.getElementById("Math") .innerHTML = showResults
  }
  function calculatingMulti() {
    var multi = 3 * 4;
    document.getElementById("Math") .innerHTML = showResults
  }
  function calculatingRemain() {
    var remain = 8 % 3;
    document.getElementById("Math") .innerHTML = showResults
  }
    var incre = 5++ ;
    document.write(incre)

  function calculatingDecre() {
    var decre = 10-- ;
    document.getElementById("Math") .innerHTML = showResults
  }
function myFunction() {
    var showResults = "Your numbers added are: " + add;
    showResults += "Your numbers subtracted are: " + sub;
    showResults += "Your numbers multiplied are: " + multi;
    showResults += "The remainder of your numbers are: " + remain;
    showResults += "The increments of your numbers are: " + incre;
    showResults += "The decrements of your numbers are: " + decre;
    document.getElementById("Math") .innerHTML = showResults
}
window.alert(Math.random() * 100);