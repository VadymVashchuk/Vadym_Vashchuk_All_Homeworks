
// Це те що я сам придумав

function checkInput(data) {
  let inputIsAnArray = false;
  let result = "";
  if (data[0] === undefined) {   //Якщо це не строка і не масив то всьо
    inputIsAnArray = false;
    return inputIsAnArray;
  } else {
    for (i = 0; i < data.length; i++) { //А ця частина щоб відрізнити строку від масива
      result += data[i];
    }
    if (result === data) {
      inputIsAnArray = false;
    }
    if (result != data) {
      inputIsAnArray = true;
    }
    return inputIsAnArray;
  }
}


// Це те що я нагуглив...

function checkInputTwo(data) {
  let inputIsAnArray = false;
  if (toString.call(data) === "[object Array]") {
    inputIsAnArray = true;
  }
  return inputIsAnArray
}
