


let data1 = [1, 2, 3, 4, 5, 6, 6, 7, 6];
let data2 = ["4", "5"];
let test = 5;


// сама функція

function searchInArray(target, arrayToCheck) {
  let searchResult = false;
  for (i = 0; i < arrayToCheck.length; i++) {
    if (target === arrayToCheck[i]) {
      searchResult = true;
    }
  }
  console.log(searchResult);
}

searchInArray(test, data1);
