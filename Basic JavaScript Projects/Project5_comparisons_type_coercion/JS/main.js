document.write(typeof "Cheese")
document.write("30" + 22)
function my_Function() {
    document.getElementById("Test") .innerHTML = 0/0
}
function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}
function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}
document.getElementById("Test") .innerHTML = isNaN('This is a string'); //true - is not a number//
document.getElementById("Test") .innerHTML = isNaN('007'); //false - is a number//
document.write(2E310); //displays "infinity"//
document.write(-3E310); //displays negative "infinity"//
document.write(10 < 2); //displays false//
document.write(10 > 2); //displays true//
document.write(10 == 10); //displays true//
document.write(3 == 11); //displays false//
document.write(3 === 3); //displays true - same data type and value//
document.write(3 === "String");//displays false - different data type and value//
document.write(3 === "3");//displays false - different data type, same value//
document.write(3 === 7);//displays false - same data type, different value//
document.write(5 > 2 && 10 > 4);//displays true - checks both expressions; both are true//
document.write(5 > 10 && 10 > 4);//displays false - checks both expressions; one or both are false//
document.write(5 > 10 || 10 > 4);//displays true - checks both expressions; one or both are true//
document.write(5 > 10 || 10 > 20);//displays false - checks both expressions; neither are true//
document.write(Bigger = (5 > 1) ? "Left number is bigger":"Right number is bigger");
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height") .value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
Customer cust = new Customer("Brenda Smith");
class Customer
{
    string = FullName;
    boolean = Active
}
Customer(string "name") {
    FullName = name;
    Active = true;
}
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function count_function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
function Add_numbers_3() {
    console.log(15 + X);
}
function Add_numbers_4() {
    console.log(X + 100);
}
Add_numbers_1();
Add_numbers_2();
console.log(2 + 2); //displays '4' in console log//
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote.";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete  ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}
function to_UpperC() { //takes UpperC paragraph code and changes all text in string value to Uppercase//
    let text = document.getElementById("UpperC").innerHTML;
    document.getElementById("UpperC").innerHTML =
    text.toUpperCase();
}
function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10)
}




