const data = [
  {
    ids: ['left-hand-top', 'right-hand-top', 'left-hand-top-back', 'right-hand-top-back', 'left-hand-profile-top', 'right-hand-profile-top'],
    descriptions: {
      name: 'Плечо/бицепс',
      price: ['8 000', '10 000 - 16 000', '17 000 - 20 000', '21 000'],
      time: ['до 2 часов', 'от 2-4 часов', 'от 4-6 часов', 'от 6 часов (за сеанс)'],
    },
  },
  {
    ids: ['clavicle'],
    descriptions: {
      name: 'Ключицы',
      price: ['9 000', '10 000 - 16 000', '17 000 - 20 000', '21 000'],
      time: ['до 2 часов', 'от 2-4 часов', 'от 4-6 часов', 'от 6 часов (за сеанс)'],
    },
  },
  {
    ids: ['ribs'],
    descriptions: {
      name: 'Ребра - одно из самых болезненных мест для тату',
      price: ['9 000', '15 000', '25 000', '31 000'],
      time: ['до 2 часов', 'от 2-4 часов', 'от 4-6 часов', 'от 6 часов (за сеанс)'],
    },
  },
  {
    ids: ['left-leg-top', 'right-leg-top', 'left-leg-top-back', 'right-leg-top-back'],
    descriptions: {
      name: 'Бедро',
      price: ['9 600', '12 000', '20 000 - 24 000', '25 000'],
      time: ['до 2 часов', 'от 2-4 часов', 'от 4-6 часов', 'от 6 часов (за сеанс)'],
    },
  },
  {
    ids: ['left-leg-center', 'right-leg-center'],
    descriptions: {
      name: 'Передняя часть икры',
      price: ['8 000', '10 000 - 16 000', '17 000 - 20 000', '21 000'],
      time: ['до 2 часов', 'от 2-4 часов', 'от 4-6 часов', 'от 6 часов (за сеанс)'],
    },
  },
  {
    ids: ['left-leg-center-back', 'right-leg-center-back'],
    descriptions: {
      name: 'Задняя часть икры',
      price: ['8 000', '10 000 - 16 000', '17 000 - 20 000', '21 000'],
      time: ['до 2 часов', 'от 2-4 часов', 'от 4-6 часов', 'от 6 часов (за сеанс)'],
    },
  },
  {
    ids: ['left-leg-profile-center', 'right-leg-profile-center'],
    descriptions: {
      name: 'Боковая часть икры',
      price: ['8 000', '10 000 - 16 000', '17 000 - 20 000', '21 000'],
      time: ['до 2 часов', 'от 2-4 часов', 'от 4-6 часов', 'от 6 часов (за сеанс)'],
    },
  },
  {
    ids: ['left-leg-bottom', 'right-leg-bottom', 'left-leg-bottom-back', 'right-leg-bottom-back', 'left-leg-profile-bottom', 'right-leg-profile-bottom'],
    descriptions: {
      name: 'Щиколотка',
      price: ['8 000', '10 000 - 16 000', '17 000 - 20 000'],
      time: ['до 2 часов', 'от 2-4 часов', 'от 4-6 часов'],
    },
  },
  {
    ids: ['right-hand-center', 'left-hand-center'],
    descriptions: {
      name: 'Передняя часть руки',
      price: ['8 000', '10 000 - 16 000', '17 000 - 20 000', '21 000'],
      time: ['до 2 часов', 'от 2-4 часов', 'от 4-6 часов', 'от 6 часов (за сеанс)'],
    },
  },
  {
    ids: ['left-hand-center-back', 'right-hand-center-back'],
    descriptions: {
      name: 'Задняя часть руки',
      price: ['8 000', '10 000 - 16 000', '17 000 - 20 000', '21 000'],
      time: ['до 2 часов', 'от 2-4 часов', 'от 4-6 часов', 'от 6 часов (за сеанс)'],
    },
  },
  {
    ids: ['left-hand-profile-center', 'right-hand-profile-center'],
    descriptions: {
      name: 'Боковая часть руки',
      price: ['8 000', '10 000 - 16 000', '17 000 - 20 000', '21 000'],
      time: ['до 2 часов', 'от 2-4 часов', 'от 4-6 часов', 'от 6 часов (за сеанс)'],
    },
  },
  {
    ids: ['clavicle-back'],
    descriptions: {
      name: 'Спина',
      price: ['9 000', '12 000', '20 000 - 24 000', '31 000'],
      time: ['до 2 часов', 'от 2-4 часов', 'от 4-6 часов', 'от 6 часов (за сеанс)'],
    },
  },
  {
    ids: ['ribs-back'],
    descriptions: {
      name: 'Поясница',
      price: ['8 000', '10 000 - 16 000', '17 000 - 20 000', '21 000'],
      time: ['до 2 часов', 'от 2-4 часов', 'от 4-6 часов', 'от 6 часов (за сеанс)'],
    },
  },
  {
    ids: ['left-hand-bottom', 'right-hand-bottom', 'left-hand-bottom-back', 'right-hand-bottom-back', 'left-hand-profile-bottom', 'right-hand-profile-bottom'],
    descriptions: {
      name: 'Кисть руки',
      price: ['8 000', '10 000 - 16 000', '17 000 - 20 000'],
      time: ['до 2 часов', 'от 2-4 часов', 'от 4-6 часов'],
    },
  },
  {
    ids: ['left-stomach-profile', 'right-stomach-profile'],
    descriptions: {
      name: 'Живот',
      price: ['8 000', '10 000 - 16 000', '17 000 - 20 000', '21 000'],
      time: ['до 2 часов', 'от 2-4 часов', 'от 4-6 часов', 'от 6 часов (за сеанс)'],
    },
  },
];