let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let reset = document.getElementById("reset");

let count = 0;

plus.onclick = function() {
    
    if(count < 1000)
        {
            count++;
            document.getElementById("No").textContent = count;
        }
    
}

minus.onclick = function() {
    if(count > 0)
        {
        count--;
        document.getElementById("No").textContent = count;
        }
}

reset.onclick = function() {
    count = 0;
    document.getElementById("No").textContent = count;
}