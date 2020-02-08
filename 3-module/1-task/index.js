/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let balanceNameValue = []; //создаём новый массив, в который поместим отфильтрованные свойства

  data
    .filter(names => names.age <= age) // фильтруем по возрасту
    .map(names => balanceNameValue.push(`${names.name}, ${names.balance}`)); //добавляем отфильтрованные свойства в новый массив
  return balanceNameValue.join('\n'); // склеиваем новый массив в строку, с возвращением каждого пользователя с новой строки
}


/*

let data = [ //создали массив data для проверки функции showSalary(data, age).
  {
        "balance": "$1,825.65",
        "picture": "http://placehold.it/32x32",
        "age": 21,
        "name": "Golden Branch",
        "gender": "male",
        "greeting": "Hello, Golden Branch! You have 7 unread messages.",
        "favoriteFruit": "banana"
},
  {
        "balance": "1,490.15",
        "picture": "http://placehold.it/32x32",
        "age": 35,
        "name": "Duncan Randall",
        "gender": "male",
        "greeting": "Hello, Golden Branch! You have 7 unread messages.",
        "favoriteFruit": "banana"
  },
  {
        "balance": "$1,004.99",
        "picture": "http://placehold.it/32x32",
        "age": 20,
        "name": "Bronze Branch",
        "gender": "female",
        "greeting": "Hello, Golden Branch! You have 7 unread messages.",
        "favoriteFruit": "banana"
  },
   {
        "balance": "$1,555.55",
        "picture": "http://placehold.it/32x32",
        "age": 5,
        "name": "Silver Branch",
        "gender": "male",
        "greeting": "Hello, Golden Branch! You have 7 unread messages.",
        "favoriteFruit": "banana"
},
];

console.log(showSalary(data, 25)); // вызвали функцию в консоле для проверки

*/
