const division = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(b === 0) {
        reject("на ноль делить нельзя");
      } else {
        resolve(a / b);
      }
    }, 1000);
  })
}

division(10, 20)
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

module.exports = division


