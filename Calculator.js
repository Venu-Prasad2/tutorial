let inputEl = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let arr = Array.from(buttons);
let string = "";
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === "=") {
            string = eval(string);
            inputEl.value = string;
        } else if (e.target.innerHTML === "AC") {
            string = "";
            inputEl.value = string;
        } else if (e.target.innerHTML === "DEL") {
            string = string.substring(0, string.length - 1);
            inputEl.value = string;
        } else {
            string += e.target.innerHTML;
            inputEl.value = string;
        }

    })
})