/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ul = document.createElement('ul'); // создаём элемент ul

  for(let i = 0; i < friends.length; i++) { // запускаем цикл по длине объекта в переданном аргументе
    let li = document.createElement('li'); // создаём элемент списка li
    li.innerHTML = `${friends.firstName}, ${friends.lastName}`; // записываем имя и фамилию из объекта в элемент li
    ul.append(li); // добавляем элемент li после элемента ul
  }
  return ul; // возвращаем готовый список
}
