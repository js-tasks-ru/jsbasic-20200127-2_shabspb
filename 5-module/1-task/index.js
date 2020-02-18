/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  for (let row of table.rows) { //запускаем цикл по коллекции строк таблицы tr
    // затем берём последнее значение td и строго сравниваем его с true
    if (row.cells[row.cells.length - 1].dataset.available === 'true') {
      // если true есть, значит добавляем класс available
      row.classList.add('available');
      // затем берём последнее значение td и строго сравниваем его с false
    } else if (row.cells[row.cells.length - 1].dataset.available === 'false') {
      // если false есть, значит добавляем класс unavailable
      row.classList.add('unavailable');
      // затем берём последнее значение td и проверяем есть ли атрибут data-available
    } else if (!row.cells[row.cells.length - 1].dataset.available) {
      // если нет(!), то прячем всю строку tr, путём добавления атрибута hidden со значением true
      row.setAttribute('hidden', true);
    }
    // далее берем третий td и сравниваем его со значением 'm'
    if (row.cells[2].textContent === 'm') {
      // если совпадение есть, то добавляем класс 'male'
      row.classList.add('male');
      // далее берем третий td и сравниваем его со значением 'f'
    } else if (row.cells[2].textContent === 'f') {
      //если совпадение есть, то добавляем класс 'female'
      row.classList.add('female');
    }
    // берём второй td, переводим его в числовой формат и сравниваем с числом 18
    if (+row.cells[1].textContent < 18) {
      // если меньше 18, то добавляем стиль зачеркнутая линия
      row.style.textDecoration = 'line-through';
    }
  }
}
