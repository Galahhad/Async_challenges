const square = (number) => {
  return new Promise ((resolve, reject) => {
  setTimeout(() => {
    if(number === 0) {
      reject("Ошибка: число должно быть больше нуля", null);
    } else {
      resolve(number * number);
    }
  }, 1000);
  })
}

square(1)
.then((data) => console.log(data))
.catch((error) => console.log(error))

/*
 * После исправлений следующий код должен стать валидным
 * (а также успешно должны проходиться тесты)
*/

// square(4).then((data) => {
//   console.log(data);
// }).catch((e) => {
//   console.log(e);
// })

module.exports = square;
