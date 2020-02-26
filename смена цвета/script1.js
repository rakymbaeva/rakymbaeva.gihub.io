let inputA = document.querySelector("#color");
let inputB = document.querySelector("#color2");

inputA.addEventListener("input", function(){
    document.body.style.background =( "linear-gradient(45deg," + inputA.value +" , " + inputB.value + ")");
  });
  
input.addEventListener("input", function(){
    document.body.style.background =( "linear-gradient(45deg," + inputA.value +" , " + inputB.value + ")");
  });