/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  return str //возвращаем строку:
    .split('-') // сначала делаем из строки массив по разделителю тире
    // затем работаем с массивом, если слово первое, то ничего не делаем,
    // в остальных случаях делаем первую заглавную букву и соединяем с этим же словом без первой буквы
    .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
    // склеиваем строку из элементов массива
    .join('');
}

/*
camelize('background-color') == 'backgroundColor';
camelize('list-style-image') == 'listStyleImage';
camelize('-webkit-transition') == 'WebkitTransition';
 */
