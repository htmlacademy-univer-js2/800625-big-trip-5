import MainPresenter from './presenter/main-presenter.js';

document.addEventListener('DOMContentLoaded', () => {
  // Находим контейнер для фильтров по классу, как указано в index.html
  const filtersContainer = document.querySelector('.trip-controls__filters');
  // Находим контейнер для событий (точек маршрута, форм и т.д.)
  const eventsContainer = document.querySelector('.trip-events');

  // Выводим в консоль для проверки, что контейнеры найдены
  console.log('Filters Container:', filtersContainer);
  console.log('Events Container:', eventsContainer);

  // Если контейнеры найдены, инициализируем презентер
  if (filtersContainer && eventsContainer) {
    const mainPresenter = new MainPresenter(filtersContainer, eventsContainer);
    mainPresenter.init();
  } else {
    console.error('Не найдены необходимые контейнеры в DOM.');
  }
});