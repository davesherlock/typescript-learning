const subButton = document.getElementById("sub")! as HTMLInputElement;


function subtract(num1: number, num2: number): number {
    return num1 - num2;
}

subButton.addEventListener("click", function () {

    console.log(subtract(+input1.value, +input2.value));

});