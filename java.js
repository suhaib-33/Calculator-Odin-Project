const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let value = btn.textContent;

        // CLEAR
        if (value === "C") {
            display.value = "";
        }

         else if (value === "=") {
            let expo = display.value;
            let result = calculate(expo);
            display.value = result;
        }

        // NORMAL INPUT (numbers + operators)
        else {
            display.value += value;
        }
    });
});

// SIMPLE CALCULATE FUNCTION

function calculate (expo) {
    let operators = ["+", "-", "*", "/"];
    for (let op of operators) {
        if (expo.includes(op)) {
            let parts = expo.split(op);

            let a = Number(parts[0]);
            let b = Number(parts[1]);

            if (op === "+") return a + b;
            if (op === "-") return a - b;
            if (op === "*") return a * b;
            if (op === "/") return b === 0 ? "Error" : a / b;
        }
    }
}


