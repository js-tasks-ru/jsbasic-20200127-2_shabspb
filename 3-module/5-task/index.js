/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  // возвращаем новый массив отфильтрованных значений если а меньше
  // или равно переданного значения И если это значение меньше или равно b
  return arr.filter(value => a <= value && value <= b);
}

/*
let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
    // Ваш код
}

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // [3,1] (совпадающие значения)
console.log( arr ); // [5,3,8,1] (без изменений)
 */
