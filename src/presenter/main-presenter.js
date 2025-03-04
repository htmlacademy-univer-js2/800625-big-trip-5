import FiltersView from '../view/filters-view.js';
import EditFormView from '../view/edit-form-view.js';
import RoutePointView from '../view/route-point-view.js';

export default class MainPresenter {
  constructor(filtersContainer, eventsContainer) {
    this.filtersContainer = filtersContainer;  // .trip-controls__filters
    this.eventsContainer = eventsContainer;    // .trip-events
  }

  init() {
    // 1. Создаём экземпляр класса FiltersView и добавляем в filtersContainer
    const filtersView = new FiltersView();
    this.filtersContainer.appendChild(filtersView.element);

    // 2. Форма редактирования (первая в списке)
    const editFormView = new EditFormView();
    this.eventsContainer.appendChild(editFormView.element);

    // 3. Три точки маршрута
    for (let i = 0; i < 3; i++) {
      const routePointView = new RoutePointView();
      this.eventsContainer.appendChild(routePointView.element);
    }
  }
}