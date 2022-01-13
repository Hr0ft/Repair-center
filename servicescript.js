new Swiper ('.brand__slider', {

  navigation: {
      nextE1:'.swiper-buton-next',
      prevE1:'.swiper-buton-prew'
  },
    
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
        // dynamicBullets:true,
    },

    slideToClickedSlide:true,
    slidesPerView:'auto',
    watchOverflow: true,
    spaceBetween: 20,
    slidesPerGroup: 1,
    // centeredSlides: true,
    loop: true,
    freeMode:true,
    observer: true,
    watchOverflow: true

});


let change = document.querySelector('.open');
let openItem = document.querySelector('.brand__grid');
let changeText = document.querySelector('.open__tbuttonext')
let chngeButton = document.querySelector('.open__button');
    change.addEventListener('click', function() {
        let changeText = document.getElementById('open__toggle');
        if (changeText.innerHTML == 'Показать все' ) {
            changeText.innerHTML = 'Скрыть';
            openItem.style.height = 'auto';
            chngeButton.classList.add('open__button_reverse')
        }
        else {
            changeText.innerHTML = 'Показать все';
            openItem.style.height = '200px';
            chngeButton.classList.remove('open__button_reverse');
        }
    });