export default class FiltersView {
    constructor() {
      this.element = this._createElement();
    }
    
    _createElement() {
      const div = document.createElement('div');
      div.classList.add('filters');
      div.innerHTML = `
        <!-- Здесь может быть шаблон фильтров -->
        <h2>Фильтры</h2>
        <form>
          <input type="radio" name="filter" id="filter-all" checked>
          <label for="filter-all">Все</label>
          <input type="radio" name="filter" id="filter-future">
          <label for="filter-future">Будущие</label>
          <input type="radio" name="filter" id="filter-past">
          <label for="filter-past">Прошедшие</label>
        </form>
      `;
      return div;
    }
    
    getTemplate() {
      return this.element;
    }
  }