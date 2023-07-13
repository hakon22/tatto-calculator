const createInfoBlock = (id) => {
  const slide = [...document.querySelectorAll('#rotation > img')];
  // получаем номер активного слайда
  const activeSlide = slide.find((slide) => slide.style.display !== 'none').src.split(".")[0].split("/").pop();
  const { name, price, time } = (activeSlide > 11 && activeSlide < 14)
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
  const { activeButton, defaultBlock, activeModalBlock } = state;
  const activeBlock = window.screen.width > 768 ? state.activeBlock : state.activeModalBlock;
  if (window.screen.width <= 768) {
    modalBackground.style.display = 'block';
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

const bodyElementHTML = document.querySelector('body');
const modalBackground = document.querySelector('.modalBackground');
const modalClose = document.querySelector('.modalClose');
const modalActive = document.querySelector('.modalActive');

[modalClose, modalBackground].forEach((modal) => {
  modal.addEventListener('click', ({  target }) => {
    if (target === modalBackground || target === modalClose) {
        modalBackground.style.display = 'none';
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