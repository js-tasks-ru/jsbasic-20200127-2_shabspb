'use strict';

class Menu {
  template = `
  <ul class="list-group sidebar">
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cameraphotos">Camera &amp; Photo</a>
      <ul class="dropdown-menu">

       <li data-id="cameraphotos_accessories" class="dropdown-item"><a>Accessories</a></li>

      </ul>
    </li>

    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cinema">Home Cinema, TV &amp; Video</a>
      <ul class="dropdown-menu">

       <li data-id="cinema_audio" class="dropdown-item"><a>Audio</a></li>

       <li data-id="cinema_video" class="dropdown-item"><a>Video</a></li>

      </ul>
    </li>
  </ul>
  `;

  constructor(element) {
    this.el = element;
    this.addMenu();
    this.toggleMenu();
  }

  addMenu() {
    this.el.innerHTML = this.template;
  }

  toggleMenu() {
    let listGroupItems = this.el.querySelectorAll('.list-group-item'),
      backdrop = document.querySelector('.backdrop');
    for (let item of listGroupItems) {
      item.addEventListener('pointerenter', (event) => {
        let dropdown = event.target.querySelector('.dropdown-menu');
        dropdown.classList.toggle('show');
        backdrop.classList.toggle('show');
      });
      item.addEventListener('pointerleave', (event) => {
        let dropdownMenu = event.target.querySelector('.dropdown-menu');
        dropdownMenu.classList.toggle('show');
        backdrop.classList.toggle('show');
      });
    }
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Menu = Menu;
