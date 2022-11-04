let mainEl = document.getElementById('mainEl');
let elementStyle = getComputedStyle(mainEl);

const widthChooser = document.getElementById('widthChooser');
const heightChooser = document.getElementById('heightChooser');
const borderRadiusChooser = document.getElementById('borderRadiusChooser');

const arrowUp = document.getElementById('arrowUp');
const arrowDown = document.getElementById('arrowDown');
const arrowRight = document.getElementById('arrowRight');
const arrowLeft = document.getElementById('arrowLeft');

const newProperties = {
  width: document.getElementById('widthEl'),
  height: document.getElementById('heightEl'),
  bgColor: document.getElementById('bgColorEl'),
  borderColor: document.getElementById('borderColorEl'),
  borderRadius: document.getElementById('borderRadiusEl'),
  fontColor: document.getElementById('fontColorEl'),
}

function acceptChanges() {
  mainEl.style.width = newProperties.width.value + widthChooser.value;
  mainEl.style.height = newProperties.height.value + heightChooser.value;
  mainEl.style.backgroundColor = newProperties.bgColor.value;
  mainEl.style.borderColor = newProperties.borderColor.value;
  mainEl.style.borderRadius = newProperties.borderRadius.value + borderRadiusChooser.value;
  mainEl.style.color = newProperties.fontColor.value;
}

function clearAllChanges() {
  widthChooser.value = "px";
  heightChooser.value = "px";
  borderRadiusChooser.value = "%";
  newProperties.width.value = "";
  newProperties.height.value = "";
  newProperties.bgColor.value = "#9d92ac";
  newProperties.borderColor.value = "#42167a";
  newProperties.borderRadius.value = "";
  newProperties.fontColor.value = "#222222";

  mainEl.style.width = "300px";
  mainEl.style.height = "300px";
  mainEl.style.backgroundColor = "rgb(157, 146, 172)";
  mainEl.style.borderColor = "rgb(66, 22, 122)";
  mainEl.style.borderRadius = "";
  mainEl.style.color = "rgb(34, 34, 34)";
  mainEl.style.top = "250px";
  mainEl.style.left = "800px";
}



//ФУНКЦІЇ РУХУ - ПО 2 ФУНКЦІЇ НА КОЖНУ З 4 СТОРІН

//Вверх

function moveElUp() {
  let elementPositionTop = parseInt(elementStyle.top);
  mainEl.style.top = --elementPositionTop + 'px';
}

function runElUp() {
  let elementPositionTop = parseInt(elementStyle.top);
  x = setInterval(function () {
    mainEl.style.top = --elementPositionTop + 'px';
  }, 100);
  document.addEventListener('mouseup', function () {
    clearInterval(window.x);
  })
}

//Вправо

function moveElRight() {
  let elementPositionLeft = parseInt(elementStyle.left);
  mainEl.style.left = ++elementPositionLeft + 'px';
}

function runElRight() {
  let elementPositionLeft = parseInt(elementStyle.left);
  x = setInterval(function () {
    mainEl.style.left = ++elementPositionLeft + 'px';
  }, 100);
  document.addEventListener('mouseup', function () {
    clearInterval(window.x);
  })
}

//Вниз

function moveElDown() {
  let elementPositionTop = parseInt(elementStyle.top);
  mainEl.style.top = ++elementPositionTop + 'px';
}

function runElDown() {
  let elementPositionTop = parseInt(elementStyle.top);
  x = setInterval(function () {
    mainEl.style.top = ++elementPositionTop + 'px';
  }, 100);
  document.addEventListener('mouseup', function () {
    clearInterval(window.x);
  })
}

//Вліво

function moveElLeft() {
  let elementPositionLeft = parseInt(elementStyle.left);
  mainEl.style.left = --elementPositionLeft + 'px';
}

function runElLeft() {
  let elementPositionLeft = parseInt(elementStyle.left);
  x = setInterval(function () {
    mainEl.style.left = --elementPositionLeft + 'px';
  }, 100);
  document.addEventListener('mouseup', function () {
    clearInterval(window.x);
  })
}

//СТРЕЛОЧКИ

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowUp') {
    moveElUp();
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowDown') {
    moveElDown();
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') {
    moveElRight();
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') {
    moveElLeft();
  }
});
