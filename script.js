var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// IMAGE CAROUSEEL

// const imgs = document.getElementById('imgs')
// const leftBtn = document.getElementById('left')
// const rightBtn = document.getElementById('right')

// const img = document.querySelectorAll('#imgs img')

// let idx = 0

// let interval = setInterval(run, 3000);

// function run() {
//   idx++;
//   changeImage()
// }

// function changeImage() {
//   if(idx > img.length - 1) {
//     idx = 0;
//   } else if (idx < 0) {
//     idx = img.length - 1
//   }

//   imgs.style.transform = `translateX(${-250 * idx}px)`
// }

// function resetInterval() {
//   clearInterval(interval)
//   interval = setInterval(run,3000)
// }

// rightBtn.addEventListener('click', () => {
//   idx++
//   changeImage();
//   resetInterval()
// })

// leftBtn.addEventListener('click', () => {
//   idx--
//   changeImage();
//   resetInterval()
// })

