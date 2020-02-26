let input = document.querySelector("#color");
let body = document.querySelector('body');

input.oninput = function (){
    body.style.backgroundColor = input.value;
    };