export default class CreateFormView {
    constructor() {
      this.element = this.createElement();
    }
  
    createElement() {
      const form = document.createElement('form');
      form.classList.add('create-form');
      form.innerHTML = `
        <!-- Пример разметки формы создания -->
        <h2>Создать точку маршрута</h2>
        <input type="text" placeholder="Название">
        <button type="submit">Создать</button>
      `;
      return form;
    }
  
    getTemplate() {
      return this.element;
    }
  }