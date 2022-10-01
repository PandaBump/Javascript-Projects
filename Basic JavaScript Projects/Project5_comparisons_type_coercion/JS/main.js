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



console.log(2 + 2); //displays '4' in console log//









