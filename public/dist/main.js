var addButton = document.getElementById("add");
function add(num1, num2) {
    return num1 + num2;
}
addButton.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
var subButton = document.getElementById("sub");
function subtract(num1, num2) {
    return num1 - num2;
}
subButton.addEventListener("click", function () {
    console.log(subtract(+input1.value, +input2.value));
});
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
