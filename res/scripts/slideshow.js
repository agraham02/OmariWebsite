var banner = document.getElementById("slideshow");
var slideIndex = 0;

var slides = [
    {image: "url('./res/images/portrait.jpg')", text: "Oh"}, 
    {image: "url('./res/images/man-in-water.jpg')", text: "My"}, 
    {image: "url('./res/images/fred-kearney-rmxlMmbgQAk-unsplash.jpg')", text: "Gosh"} 
]

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var dots = document.getElementsByClassName("dot");

    if (n >= slides.length) {slideIndex = 0;}
    if (n < 0) {slideIndex = slides.length - 1;}

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    banner.style.backgroundImage = slides[slideIndex].image;
    document.getElementById("temp").innerHTML = slides[slideIndex].text;
    dots[slideIndex].className += " active";
}

showSlides(slideIndex);