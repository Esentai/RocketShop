var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n){
	showSlides(slideIndex = n);
}

if (window.innerWidth < 992){
    setInterval(slideTime, 5000);
}

function slideTime(n){
    n=1
    showSlides(slideIndex += n);
}

function showSlides(n){
	var i;
	const slides = document.getElementsByClassName("slider__big");
	const dots = document.getElementsByClassName("slider__min");


    if(n > slides.length){
		slideIndex = 1
	}
	if(n < 1){
		slideIndex=slides.length
	}

	for(i=0; i < slides.length; i++){
		slides[i].style.display = "none";
	}

	for(i=0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace("slider__min_active","");

	}

	slides[slideIndex-1].style.display = "flex";
	dots[slideIndex-1].className+= " slider__min_active";

}