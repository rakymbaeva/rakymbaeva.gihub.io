let input = document.querySelector("#color");
let input2 = document.querySelector("#color2");
let number = document.querySelector("#number");

input.addEventListener("input",function(){
    document.body.style.background = "linear-gradient("  + input.value + "," + input2.value + ")";

});

input2.addEventListener("input",function(){
    document.body.style.background = "linear-gradient("   + input.value + "," + input2.value + ")";

});
number.addEventListener("input",function(){
    document.body.style.background = "linear-gradient(" + number.value + "deg ," + input.value + "," + input2.value + ")";
})

input.addEventListener("input", SetBackground);
input2.addEventListener("input", SetBackground);
number.addEventListener("input", SetBackground);
 SetBackground();