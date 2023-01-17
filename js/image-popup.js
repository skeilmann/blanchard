// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "flex";
  document.body.style.overflow = 'hidden'; // added line to block body from scrolling
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.body.style.overflow = 'auto'; // added line to enable body scrolling
}


// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("card");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  };
  slides[slideIndex - 1].style.display = "flex";
}
