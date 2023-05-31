var slide = document.querySelector('.slideshow');
var images = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg'
];
var time = 2000;
var count = 0;

function moveSlideShow(){
    slide.src = images[count];

    if(count < images.length - 1){
        count++;
    } else {
        count = 0;
    }

    setTimeout("moveSlideShow()", time);
}

window.onload = moveSlideShow;