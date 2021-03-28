System.register("include/inputs", [], function (exports_1, context_1) {
    "use strict";
    var button, input1, input2;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("button", button = document.querySelector("button"));
            exports_1("input1", input1 = document.getElementById("num1"));
            exports_1("input2", input2 = document.getElementById("num2"));
        }
    };
});
System.register("add", ["include/inputs"], function (exports_2, context_2) {
    "use strict";
    var inputs_js_1;
    var __moduleName = context_2 && context_2.id;
    function add(num1, num2) {
        return num1 + num2;
    }
    return {
        setters: [
            function (inputs_js_1_1) {
                inputs_js_1 = inputs_js_1_1;
            }
        ],
        execute: function () {
            inputs_js_1.button.addEventListener("click", function () {
                console.log(add(+inputs_js_1.input1.value, +inputs_js_1.input2.value));
            });
        }
    };
});
System.register("subtract", ["include/inputs"], function (exports_3, context_3) {
    "use strict";
    var inputs_js_2;
    var __moduleName = context_3 && context_3.id;
    function subtract(num1, num2) {
        return num1 - num2;
    }
    return {
        setters: [
            function (inputs_js_2_1) {
                inputs_js_2 = inputs_js_2_1;
            }
        ],
        execute: function () {
            inputs_js_2.button.addEventListener("click", function () {
                console.log(subtract(+inputs_js_2.input1.value, +inputs_js_2.input2.value));
            });
        }
    };
});
