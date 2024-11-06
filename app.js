let equal = document.getElementById('equal');
let resultInput = document.getElementById('result'); // The input field

function appendchar(char){
    document.getElementById("result").value += char;
}

function allclear(){
    document.getElementById("result").value = "";
}

function oneclear(){
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

function calculate() {
    try {
        let result = document.getElementById('result').value;
        document.getElementById('result').value = eval(result);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

// Event listener for the button click
equal.addEventListener("click", (e) => {
    e.preventDefault();
    calculate();
});

// Event listener for pressing the Enter key on the input field
resultInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {  // Checks if the pressed key is "Enter"
        e.preventDefault();
        calculate();
    }
});

// The rest of your functions for sqrt, sin, etc.
function sqrt1() {
    let result = document.getElementById('result').value;
    result = Math.sqrt(result);
    document.getElementById("result").value = result;
}

function sin1(){
    let result = document.getElementById('result').value;
    result = Math.sin(result);
    document.getElementById("result").value = result;
}

function cos1(){
    let result = document.getElementById('result').value;
    result = Math.cos(result);
    document.getElementById("result").value = result;
}

function log1(){
    let result = document.getElementById('result').value;
    result = Math.log(result);
    document.getElementById("result").value = result;
}

function fact1(){
    let result = document.getElementById('result').value;
    let pro = 1;
    
    for(let i = 1 ; i <= result; i++){
        pro *= i;
    }
    document.getElementById("result").value = pro;
}

function rec1(){
    let result = document.getElementById('result').value;
    document.getElementById("result").value = 1 / result;
}

function tan1(){
    let result = document.getElementById('result').value;
    result = Math.tan(result);
    document.getElementById("result").value = result;
}
