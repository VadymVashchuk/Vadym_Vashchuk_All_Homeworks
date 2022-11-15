
let data = [1,2,3,4,5,88,7,9]
let result = [];

function sortArray() {
  for (y = 0; y < data.length; y++) {
    let maximum = data[y];
    for (i = y; i < data.length; i++) {
      if (data[i] >= maximum) {
        maximum = data[i];
      }
    }
    x = data.lastIndexOf(maximum);
    data.splice(x, 1);
    data.unshift(maximum);
  }
  return [data];
}

sortArray();
console.log(data);
