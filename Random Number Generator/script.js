
let min = 1;
let max = 10;

min = Number(window.prompt("Enter Starting Range: "));
max = Number(window.prompt("Enter Ending Range: "));

const button = document.getElementById("btn");

let number = 0;

button.onclick = function() {
    document.getElementById("lbl").textContent = number;
    number = Math.floor(Math.random() * (max - min) + min);
}
