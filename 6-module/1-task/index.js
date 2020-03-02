/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: 'Ilia',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *      },
 *
 * @constructor
 */
class ClearedTable {
  constructor(data) {
    this.el = document.createElement('table');
    this.data = data;
    this.el.classList.add('pure-table'); //добавляю класс в table
    let thead = document.createElement('thead'); //создал элемент thead
    // заполнил thead
    thead.innerHTML = `<tr>
                           <td>Name</td>
                           <td>Age</td>
                           <td>Salary</td>
                           <td>City</td>
                           <td></td>
                       </tr>`;
    this.el.append(thead); // добавил thead в конец table
    let tbody = document.createElement('tbody'); // создал элемент tbody
    this.el.append(tbody); // добавил tbody в конец table

    for (let item of data) { // запускаю цикл по массиву
      let tr = document.createElement('tr'); // создаю элемент tr
      // заполняю tr
      tr.innerHTML = `<td>${item.name}</td>
                      <td>${item.age}</td>
                      <td>${item.salary}</td>
                      <td>${item.city}</td>
                      <td><a href="#delete" data-user-id=${item.id}>X</a></td>`; // установил аттрибут с номером id для последующего поиска элемента
      tbody.append(tr); // добавляю tr в конец tbody
    }

    this.el.addEventListener('click', (event) => { // вешаю обработчик событий на table со стрелочной функцией (иначе теряется контекст)
      if (event.target.tagName === 'A') { // если кликнули по тегу А
        event.target.closest('tr').remove(); // нашли родителя тега А и удалили его
        let id = +event.target.getAttribute('data-user-id'); // получили элемент с атрибутом 'data-user-id' и записали его в переменную id
        this.onRemoved(id); // вызвали метод onRemoved с аргументом id привязали удаление строки с конкретным id к этому методу)
      }
    });

  }

  /**
   * Метод который вызывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
  onRemoved(id) {
    alert(`Из таблицы удален пользователь ${id}`);
  }
}

window.ClearedTable = ClearedTable;
