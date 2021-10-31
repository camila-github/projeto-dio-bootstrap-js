/***** MOSTRA SCROLL-TOP *****/ 
const scrollTop = () =>{
  const scrollTop = document.getElementById('scroll-top');
  /* Quando a rolagem for superior a 560 altura da janela de visualização, 
  adiciona a classe 'show-scroll' à tag 'a' com a classe 'scroll-top' */
  if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); 
  else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)



/***** ANIMACAO SCROLL REVEAL *****/

/* Animacao Top */
const srTop = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1500,
  reset: true
});

srTop.reveal(`.slider__title, .about__h1, .about__p`, { delay: 200 })
srTop.reveal(`.carousel__slide, .about__img`, { delay: 500 })


/*Animacao Left*/
const srLeft = ScrollReveal({
  origin: 'left',
  duration: 1000,
  reset: true
});

srLeft.reveal(`.blog__h1, .price__h1, .price__p, 
              .price__title, .subscribe__h1, 
              .subscribe__p, .contact__h1,
              .contact__h3
              `, {
                  delay: 200
});

srLeft.reveal(`.blog__img, .price__list1, 
              .subscribe__form, .contact__form, 
              .footer__info
              `, {
                  delay: 300
});

srLeft.reveal(`.price__list2, .contact__form__btn`, {delay: 400});
srLeft.reveal(`.price__list3, .footer__postagens`, {delay: 500});
srLeft.reveal(`.blog__img2, .btn-more-info, .price__list4`, {delay: 600});
srLeft.reveal(`.price__list5, .footer__acessos`, {delay: 700});
srLeft.reveal(`.price__list6, .price__btn`, {delay: 800});
