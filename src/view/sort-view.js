export default class SortView {
    constructor() {
      this.element = this.createElement();
    }
  
    createElement() {
      const div = document.createElement('div');
      div.classList.add('sort');
      div.innerHTML = `
        <!-- Пример разметки сортировки -->
        <h2>Сортировка</h2>
        <ul>
          <li>По дате</li>
          <li>По цене</li>
        </ul>
      `;
      return div;
    }
  
    getTemplate() {
      return this.element;
    }
  }