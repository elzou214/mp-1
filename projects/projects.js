


function myPow(){
    let first =document.getElementById("first").value;
    let second =document.getElementById("second").value;
    first = Number(first);
    second = Number(second);
    

    let output = 1;

    for(let i = 0; i < second; i++){
        output = first * output
    }

    let outputElement = document.getElementById("output");
    if (output < 0) {
        outputElement.innerHTML = `<h3 style="color: red;">${output}</h3>`;
    } else {
        outputElement.innerHTML = `<h3>${output}</h3>`;
    }

}

function myAdd(){
    let first =document.getElementById("first").value;
    let second =document.getElementById("second").value;
    first = Number(first);
    second = Number(second);

    let output = first + second;

    let outputElement = document.getElementById("output");
    if (output < 0) {
        outputElement.innerHTML = `<h3 style="color: red;">${output}</h3>`;
    } else {
        outputElement.innerHTML = `<h3>${output}</h3>`;
    }

}


function sub(){
    let first =document.getElementById("first").value;
    let second =document.getElementById("second").value;
    first = Number(first);
    second = Number(second);

    let output = first - second;

    let outputElement = document.getElementById("output");
    if (output < 0) {
        outputElement.innerHTML = `<h3 style="color: red;">${output}</h3>`;
    } else {
        outputElement.innerHTML = `<h3>${output}</h3>`;
    }

}

function div(){
    let first =document.getElementById("first").value;
    let second =document.getElementById("second").value;
    first = Number(first);
    second = Number(second);

    let output = first / second;

    let outputElement = document.getElementById("output");
    if (output < 0) {
        outputElement.innerHTML = `<h3 style="color: red;">${output}</h3>`;
    } else {
        outputElement.innerHTML = `<h3>${output}</h3>`;
    }

}

function muti(){
    let first =document.getElementById("first").value;
    let second =document.getElementById("second").value;
    first = Number(first);
    second = Number(second);

    let output = first * second;

    let outputElement = document.getElementById("output");
    if (output < 0) {
        outputElement.innerHTML = `<h3 style="color: red;">${output}</h3>`;
    } else {
        outputElement.innerHTML = `<h3>${output}</h3>`;
    }

}

function clearA(){
    document.getElementById("first").value = '';
    document.getElementById("second").value = '';
    document.getElementById("output").innerHTML = `<h3 style="color: transparent;"> hold</h3>`;
}


