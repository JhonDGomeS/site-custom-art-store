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