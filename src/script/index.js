const values = [
  {
    ids: [
      'left-hand-top',
      'right-hand-top',
      'left-hand-top-back',
      'right-hand-top-back',
      'left-hand-profile-top',
      'right-hand-profile-top'
    ],
    descriptions: {
      name: 'Плечо/бицепс',
      price: [
        '8 000',
        '10 000 - 16 000',
        '17 000 - 20 000',
        '21 000'],
      time: [
        'до 2 часов',
        'от 2-4 часов',
        'от 4-6 часов',
        'от 6 часов (за сеанс)'
      ],
    },
  },
  {
    ids: 'breast',
    descriptions: {
      name: 'Ключицы',
      price: ['9 000', '10 000 - 16 000', '17 000 - 20 000', '21 000'],
      time: ['до 2 часов', 'от 2-4 часов', 'от 4-6 часов', 'от 6 часов (за сеанс)'],
    },
  },
];

const state = {
  activeButton: document.createElement('a'),
  defaultBlock: `
  <p>Восприимчивость различных участков неодинакова. На болезненность влияют разные факторы: 
    плотность кожи, количество нервных
    окончаний в определенной области, удаленность от кости (если кость близко к коже, будет больно при 
    нанесении тату).
  </p>
  <p class="mt-18"><strong>Важно!</strong> Если вам становится нестерпимо больно, не надо дергаться и извиваться под рукой мастера. Лучше всего прервать
    сеанс и продолжить в следующий раз.
  </p>
  <p class="mt-36 mb-15 h2">Если знаешь размер и место тату, то смело записывайся</p>
  <a class="btn" href="#">Записаться на сеанс</a>`,
  activeBlock: document.querySelector('.services__main__right-column'),
}

const createInfoBlock = (id) => {
  const { name, price, time } = values.find((value) => value.ids.includes(id)).descriptions;
  return `
    <p class="h2">${name}</p>
    <p class="mt-13">
    Но не стоит полностью полагаться на разработанную шкалу и отказываться от желания сделать тату только потому, 
    что выбранный участок считается максимально чувствительным. 
    </p>
    <p class="mt-13">
    Во-первых, все индивидуально: вместо болезненных спазмов вы можете почувствовать лишь незначительные 
    мурашки.
    </p>
    <p class="mt-13">
    Во-вторых, боли можно избежать при помощи обезболов.
    </p>
    <div class="calculator">
      <div class="calculator__calc">
        <div class="calculator__calc-header">
          <div>
            <p class="h3">Выбери размер тату:</p>
            <ul>
              <li id="0" class="selector active">До 10 см</li>
              <li id="1" class="selector">10-17 см</li>
              <li id="2" class="selector">18-25 см</li>
              <li id="3" class="selector">от 25 см</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="calculator__price">
        <p class="h3">${price[0]}</p>
      </div>
      <div class="calculator__time">
        <p class="h3">${time[0]}</p>
      </div>
    </div>
    <p class="mt-18">
    Бесплатный идивидуальный эскиз перед сеансом
    </p>
    <p class="mb-15">
    Заживление пленкой
    </p>
    <a class="btn" href="#">Записаться на сеанс</a>`;
};

const calculatorHandler = ({ target }) => {
  if (target.classList.contains('active')) {
    return;
  } else {
    const activeButton = target.closest('ul').querySelector('.active');
    const name = document.querySelector('.services__main__right-column').firstElementChild.textContent;
    const priceOld = document.querySelector('.calculator__price').firstElementChild;
    const timeOld = document.querySelector('.calculator__time').firstElementChild;

    target.classList.add('active', 'animate__heartBeat');
    activeButton.classList.remove('active', 'animate__heartBeat');

    const { price, time } = values.find((value) => value.descriptions.name === name).descriptions;
    priceOld.textContent = price[target.id];
    timeOld.textContent = time[target.id];
  }
};

const animationHandler = ({ target }) => {
  if (state.activeButton.id !== target.id) {
    if (state.activeButton.classList.contains('active')) {
      state.activeButton.classList.remove('active', 'animate__heartBeat');
    }
    target.classList.add('active', 'animate__heartBeat');
    state.activeButton = target;
    state.activeBlock.innerHTML = createInfoBlock(target.id);

    const buttonsCalc = document.querySelectorAll('.selector');
    buttonsCalc.forEach((button) => {
      button.addEventListener('click', calculatorHandler);
    });
  } else {
    state.activeBlock.innerHTML = state.defaultBlock;
    state.activeButton.classList.remove('active', 'animate__heartBeat');
    state.activeButton = document.createElement('a');
  }
};

const app = () => {
  const buttons = document.querySelectorAll('.btn-calc');
  buttons.forEach((button) => {
    button.addEventListener('click', animationHandler);
  });
}

app();