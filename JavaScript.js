console.log("my first console.log");



//Datatypes
console.log(typeof "my text");
console.log(typeof 1234);
console.log(typeof true);
console.log(typeof null);



//Variable
var Variable = "This is my text in Variable"
console.log(Variable);



//Conditions
var age = 1151;
if (age < 13 && age > 0){
    console.log("You are a baby")
} else if (age < 20) {
    console.log("You are a teenager")
} else if (age <= 30) {
    console.log("You are a young person")
} else if (age <= 50){
    console.log("You are a Middle aged person")
} else if (age >= 51 && age < 130){
    console.log("You ara an old person")
} else console.log("You are not from this world or an Enciend Methological Thing!")



//Switch

/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

city = "Dhaka"

switch (city) {
    case "Gazipur":
        console.log("Now you are in Gazipur District")        
        break;

        case "Dhaka":
            console.log("Now you are in Dhaka City 'The Capital of Bangladesh' ")
            break;
            
    default:console.log("You are somewhere else")
        break;
}



//Function
function Joy() {
    console.log("My name is Sadikur Rahman Joy")
}
Joy();



function country (cnt) {
    console.log(cnt)
}
country ("Bangladesh");
country ("USA");



function Multiparameter(num1, num2) {
    console.log(num1 * num2)
}
Multiparameter(5, 6)

function Multipleparameter2(num1 = 4, num2 = 6) {
    console.log(num1 * num2)
}
Multipleparameter2(8, 9)



//Loop

var x = 1;
while (x <= 10) {
    console.log(x)
    x = x + 1;
}



for (var x = 0; x < 10; x++) {
    console.log(x)
}



//Advanced loop

var j = 569;
for (x = 1; x <= 10; x += 1) {
    console.log(j + " x " + x + " = " + j * x)
}