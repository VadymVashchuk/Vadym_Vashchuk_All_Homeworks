
let data = [1, 2, 3, 4, 5, 88, 7, 9]
let result = [];

//Мій перший варіант

function sortArray(array) {
  result = array;
  for (y = 0; y < result.length; y++) {
    let maximum = result[y];
    for (i = y; i < result.length; i++) {
      if (result[i] >= maximum) {
        maximum = result[i];
      }
    }
    x = result.lastIndexOf(maximum);
    result.splice(x, 1);
    result.unshift(maximum);
  }
  return [result];
}

sortArray(data);
console.log(result);


//Метод бульки

function sortArrayBubble(array) {
  result = array;
  let changeNumberPosition = false;
  y = 0;
  while (changeNumberPosition || y < array.length) {
    changeNumberPosition = false;
    for (i = 0; i < array.length; i++) {
      if (result[i] > result[i + 1]) {
        changingNumber = result.splice(i, 1)[0];
        result.splice(i + 1, 0, changingNumber);
        changeNumberPosition = true;
      }
    }
    y++;
  }
  return [array];
}

sortArrayBubble(data);
console.log(result);