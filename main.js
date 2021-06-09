//This is just A tutorial about XSS

console.log("Yes, you did it, good job!")

console.log("Anyways... What? You dont know what a console is?")

console.log ("Ah, I know, I have to teach you.")

console.log("Console is a part of web browsers where Developers add code, \n That is NOT seen by the user.")

console.log(" Let me give you an example.")

console.log ("You can use 'console.log' to display a message like this!")

console.log("You can use variables (or vars) to store info. \n Think of it like a box filled with ONE SINGLE object. The box is the variable and the object is the information. A var can't hold multiple values. \n An example is this!");

var first_name ="Himangshu ";
console.log('My first name is ' + first_name)
console.log('You can use "concat" to join words.')
var Mid_name= "Ranjan "
var Last_name = "Saikia"
var full1 =first_name.concat(Mid_name);
full2 = full1.concat(Last_name);
console.log(full2);
console.log('Use length to find out the length of a parameter')
var len_of_name = full2.length;
console.log(len_of_name - 2);
var num1 = 50;
var num2 = 40;
console.log('I have 2 numbers, ' + num1 + ' and ' + num2 )
console.log('Tell me, what can I do?')

console.log("That's right! I can substract")
var subtract= num1 - num2;
console.log(subtract);
console.log("Divide")
var divide = num1 / num2;
console.log(divide);
console.log("Multiply")
var multiply = num1 * num2;
console.log(multiply);
console.log('And add!')
var add = num1 + num2;
console.log(add);

