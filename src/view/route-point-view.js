export default class RoutePointView {
    constructor() {
      this.element = this.createElement();
    }
  
    createElement() {
      const div = document.createElement('div');
      div.classList.add('route-point');
      div.innerHTML = `
        <!-- Пример разметки точки маршрута -->
        <p>Точка маршрута</p>
      `;
      return div;
    }
  
    getTemplate() {
      return this.element;
    }
  }