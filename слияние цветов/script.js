var red_slider = document.getElementById("red_slider");
var green_slider = document.getElementById("green_slider");
var blue_slider = document.getElementById("blue_slider");

var red_output = document.getElementById("red_value");
var green_output = document.getElementById("green_value");
var blue_output = document.getElementById("blue_value");


red_slider.oninput = function() {
  red_output.innerHTML = this.value;
  document.documentElement.style.setProperty('--red-color', this.value);

}
green_slider.oninput = function() {
  green_output.innerHTML = this.value;
  document.documentElement.style.setProperty('--green-color', this.value);

}
blue_slider.oninput = function() {
  blue_output.innerHTML = this.value;
  document.documentElement.style.setProperty('--blue-color', this.value);
}