/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let numbers = str // создаём массив из строки
      .split(/[ ,]+/) // разбиваем строку на массив c разделителями пробел и запятая
      .filter(num => isFinite(num)); // если число, то записываем в переменную numbers

  return { min: Math.min(...numbers), max: Math.max(...numbers) }; // возвращаем min/max в виде объекта
}


/*
let inputData = '1, -5.8 или 10, хотя 34 +  ,   null  , -5.3 и 73';

console.log(getMinMax(inputData));
*/

