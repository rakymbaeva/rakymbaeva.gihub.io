window.onscroll = function showHeader() {
    var header = document.querySelector('.header');
    if(window.pageYOffset > 200){
        header.classList.add('header_fixed');
    } else{
        header.classList.remove('header_fixed');
    }
}




let arrayColor = [" rgb(238, 212, 215)", " rgb(238, 212, 215)"];
let sections = document.querySelectorAll(".about-me, .contact");

let links = document.querySelectorAll("a");

for (let index = 0; index < links.length; index++) {
  const element = links[index];

  element.addEventListener("click", function(event) {
    event.preventDefault();

    let blockId = element.getAttribute("href"); // #home
    let section = document.querySelector(blockId);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

for (let index = 0; index < sections.length; index++) {
  const element = sections[index];

  element.style.backgroundColor = arrayColor[index];
}
