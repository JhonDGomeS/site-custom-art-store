//parte nova
var currentIndex = 0;

function showSlide(index) {
 var slides = document.getElementsByClassName("slide");
 slides[currentIndex].style.opacity = "0";
 currentIndex = index;
 slides[currentIndex].style.opacity = "1";
}

function nextSlide() {
 var slides = document.getElementsByClassName("slide");
 if (currentIndex < slides.length - 1) {
    showSlide(currentIndex + 1);
 } else {
    showSlide(0);
 }
}

setInterval(nextSlide, 3000);

//fim da parte nova 

const swiper = new Swiper('.swiper', {

    spaceBetween: 5,
    slidesPerView: 3,
    loop: true,

    cubeEffect: {
      slideShadows: false,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    effect: 'flip',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})

