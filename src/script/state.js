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
  activeModalBlock: document.querySelector('.modalWindow'),
}