const addButton = document.getElementById("add")! as HTMLInputElement;


function add(num1: number, num2: number): number {
    return num1 + num2;
}

addButton.addEventListener("click", function () {

    console.log(add(+input1.value, +input2.value));

});