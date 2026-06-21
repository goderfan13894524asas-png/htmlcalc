const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {

    try {

        let expression = display.value;

        expression = expression.replace(/÷/g, "/");
        expression = expression.replace(/×/g, "*");

        const result = eval(expression);

        if (result === Infinity || isNaN(result)) {
            display.value = "Error";
            return;
        }

        display.value = result;

    } catch {
        display.value = "Error";
    }
}

document.addEventListener("keydown", (e) => {

    const allowed = "0123456789+-*/.%";

    if (allowed.includes(e.key)) {
        appendValue(e.key);
    }

    if (e.key === "Enter") {
        calculate();
    }

    if (e.key === "Backspace") {
        deleteLast();
    }

    if (e.key === "Escape") {
        clearDisplay();
    }

});