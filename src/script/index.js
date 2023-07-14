const createInfoBlock = (id) => {
  const slides = [...document.querySelectorAll('#rotation > img')];
  // получаем номер активного слайда
  const activeSlide = slides.find((slide) => slide.style.display !== 'none').id;
  const { name, price, time } = (activeSlide > 11 && activeSlide < 15)
    ? data.find((value) => value.ids.includes(`${id}-back`)).descriptions
    : data.find((value) => value.ids.includes(id)).descriptions;
  return renderCalcBlock(name, price, time);
};

const calculatorHandler = (selectors) => ({ target }) => {
  const activeBlock  = window.screen.width > 768 ? state.activeBlock : state.activeModalBlock;
  if (target.classList.contains('active')) {
    return;
  } else {
    const activeButton = selectors.querySelector('.active');
    const name = activeBlock.firstElementChild.textContent;
    const priceOld = activeBlock.querySelector('.calculator__price').firstElementChild;
    const timeOld = activeBlock.querySelector('.calculator__time').firstElementChild;

    target.classList.add('active', 'animate__heartBeat');
    activeButton.classList.remove('active', 'animate__heartBeat');

    const { price, time } = data.find((value) => value.descriptions.name === name).descriptions;
    priceOld.textContent = `от ${price[target.id]} рублей`;
    timeOld.textContent = time[target.id];
  }
};

const animationHandler = ({ target }) => {
  const { activeButton, defaultBlock } = state;
  const activeBlock = window.screen.width > 768 ? state.activeBlock : state.activeModalBlock;
  if (window.screen.width <= 768) {
    modalBackground.style.display = 'block';
    modalBackground.parentElement.style.overflow = 'hidden';
  }
  if (activeButton.id !== target.id) {
    if (activeButton.classList.contains('active')) {
      activeButton.classList.remove('active', 'animate__heartBeat');
    }
    target.classList.add('active', 'animate__heartBeat');
    state.activeButton = target;
    activeBlock.innerHTML = createInfoBlock(target.id);

    const selectors = activeBlock.querySelector('.selectors');
    selectors.childNodes.forEach((button) => {
      button.addEventListener('click', calculatorHandler(selectors));
    });
  } else {
    if (window.screen.width > 768) {
      activeBlock.innerHTML = defaultBlock;
    }
    activeButton.classList.remove('active', 'animate__heartBeat');
    state.activeButton = document.createElement('a');
  }
};

const modalBackground = document.querySelector('.modalBackground');
const modalClose = document.querySelector('.modalClose');
const modalActive = document.querySelector('.modalActive');

[modalClose, modalBackground].forEach((modal) => {
  modal.addEventListener('click', ({  target }) => {
    if (target === modalBackground || target === modalClose) {
        modalBackground.style.display = 'none';
        modalBackground.parentElement.style.overflow = '';
        state.activeButton.classList.remove('active', 'animate__heartBeat');
        state.activeButton = document.createElement('a');
    }
  });
});

buttons.forEach((button) => {
  // если профильные, ставим по умолчанию 90 градусов
  if (button.classList.contains('profile')) {
    button.style.transform = 'rotateY(90deg)';
  }
  button.addEventListener('click', animationHandler);
});

// функция добавления изображения на страницу после полной загрузки
const preloadImages = (array) => {
  if (!preloadImages.list) {
      preloadImages.list = [];
  }
  const list = preloadImages.list;
  for (let i = 0; i < array.length; i++) {
      const img = new Image();
      img.onload = () => {
          const index = list.indexOf(this);
          if (index !== -1) {
              list.splice(index, 1);
          }
      }
      list.push(img);
      img.src = array[i];
      img.id = i + 1;
      document.querySelector('#rotation').append(img);
  }
};

preloadImages([
  "./src/images/services/1.jpg",
  "./src/images/services/2.jpg",
  "./src/images/services/3.jpg",
  "./src/images/services/4.jpg",
  "./src/images/services/5.jpg",
  "./src/images/services/6.jpg",
  "./src/images/services/7.jpg",
  "./src/images/services/8.jpg",
  "./src/images/services/9.jpg",
  "./src/images/services/10.jpg",
  "./src/images/services/11.jpg",
  "./src/images/services/12.jpg",
  "./src/images/services/13.jpg",
  "./src/images/services/14.jpg",
  "./src/images/services/15.jpg",
  "./src/images/services/16.jpg",
  "./src/images/services/17.jpg",
  "./src/images/services/18.jpg",
  "./src/images/services/19.jpg",
  "./src/images/services/20.jpg",
  "./src/images/services/21.jpg",
  "./src/images/services/22.jpg",
  "./src/images/services/23.jpg",
  "./src/images/services/24.jpg",
]);

window.addEventListener("load", () => {
  $(document).ready(function () {
    $("#rotation").image360();
  });
});
