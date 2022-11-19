
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

sortArray([1,33,2,5,56,34,426,3463,4634,634]);
console.log(result);


//Метод бульки

function sortArrayBubble(array) {
  result = array;
  let changeNumberPosition = true;
  while (changeNumberPosition) {
    changeNumberPosition = false;
    for (i = 0; i < array.length; i++) {
      if (result[i] > result[i + 1]) {
        changingValue = result[i];
        result[i] = result[i + 1];
        result [i + 1] = changingValue;
        changeNumberPosition = true;
      }
    }
  }
  return [result];
}

sortArrayBubble(data);
console.log(result);