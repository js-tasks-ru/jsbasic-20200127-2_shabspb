/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
  for (let i = 0; i < table.rows.length; i++) { // запускаем цикл по длине переданному аргумента table (4 раза)
    let redTd = table.rows[i].cells[i]; // создаём переменную redTd и записываем в неё полученную ячейку
    redTd.style.backgroundColor = 'red'; // окрашиваем 5 диагональных ячеек в красный
  }
}
