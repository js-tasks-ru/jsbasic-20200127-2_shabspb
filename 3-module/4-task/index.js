/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  return users.map(item => item.name); // возвращаем массив результата выполнения функции поиска имени в каждом объекте
}

/*
let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [vasya, petya, masha];

let names = namify(users); // ['Вася', 'Петя', 'Маша']
*/
