export default class EditFormView {
    constructor() {
      this.element = this.createElement();
    }
  
    createElement() {
      const form = document.createElement('form');
      form.classList.add('edit-form');
      form.innerHTML = `
        <!-- Пример разметки формы редактирования -->
        <h2>Редактировать точку маршрута</h2>
        <input type="text" placeholder="Измените название">
        <button type="submit">Сохранить</button>
      `;
      return form;
    }
  
    getTemplate() {
      return this.element;
    }
  }