const promiseSquare = (number) => {
  return new Promise((resolve, reject) => {
    square(number, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
};

promiseSquare(1)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

/* эту функцию изменять нельзя! */
function square(number, callback) {
  setTimeout(() => {
    if (number === 0) {
      callback("Ошибка: число должно быть больше нуля", null);
    } else {
      const result = number * number;
      callback(null, result);
    }
  }, 1000);
}



module.exports = promiseSquare;
