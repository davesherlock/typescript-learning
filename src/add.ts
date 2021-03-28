import { button, input1, input2 } from "include/inputs.js";

function add(num1: number, num2: number) {
    return num1 + num2;
}

button.addEventListener("click", function () {

    console.log(add(+input1.value, +input2.value));

});