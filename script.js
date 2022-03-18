const slides = document.querySelectorAll(".slide");
const btns = document.querySelectorAll(".btn");
const body = document.querySelector("body");
const urls = ["0", "1", "2", "3", "4"];
var counter = 0;


btns.forEach( btn => {
    btn.addEventListener("click", () => {
        slides[counter].classList.toggle("active");
        btn.classList.contains("lbtn") ? counter-- : counter++;
        
        if(counter < 0) {
            counter = slides.length - 1;
        }
        else if (counter == slides.length) {
            counter = 0;
        }
        slides[counter].classList.add("active");
        body.setAttribute("style", 
        "background-image: url(" + urls[counter] + ".jpg)");
    })
    

});