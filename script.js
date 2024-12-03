const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true, 
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
  });

const popup = document.getElementById('popup');
const advertisingButton = document.querySelector('.advertising_button');
const closePopup = document.getElementById('closePopup');


advertisingButton.addEventListener('click', () => {
    popup.style.display = 'flex'; 
});


closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});


window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

document.querySelectorAll('.block_item').forEach(item => {
  const toggleButton = item.querySelector('.item-toggle');
  const answer = item.querySelector('.block_item-answer');

  toggleButton.addEventListener('click', () => {
    const isOpen = answer.style.display === 'block';

    document.querySelectorAll('.block_item-answer').forEach(a => (a.style.display = 'none'));
    document.querySelectorAll('.item-toggle').forEach(btn => (btn.textContent = '+'));

    if (!isOpen) {
      answer.style.display = 'block';
      toggleButton.textContent = '-';
    }
  });
});