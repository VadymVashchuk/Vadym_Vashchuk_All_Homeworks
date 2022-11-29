const mainTable = document.getElementById('main-table');
const mainWrapper = document.getElementById('main-wrapper');

let startNumber = 0;
let usersShown = 5;

function addData(page) {
  console.log(startNumber);
  document.querySelectorAll('.data-from-array').forEach(e => e.remove());
  numberOfLastUsersShown = page + usersShown;
  for (i = page; i < numberOfLastUsersShown; i++) {
    let dataRow = document.createElement('tr');
    dataRow.innerHTML = `
    <td>${users[i]["firstName"]}</td>
    <td>${users[i]["lastName"]}</td>
    <td>${users[i]["phone"]}</td>
    <td>${users[i]["email"]}</td>
    <td>${users[i]["address"]["city"]}</td>
    `
    dataRow.classList.add('data-from-array');
    mainTable.appendChild(dataRow);
    startNumber = i - 4;
  }
  console.log(startNumber);
}

function prevPage() {
  if (startNumber >= usersShown) {
    addData(startNumber - usersShown);
  } else if (startNumber >= 0) {
    addData(0);
  }
}

function nextPage() {
  if (startNumber < (users.length - usersShown)) {
    addData(startNumber + usersShown);
  }
}

function addButtons(interval) {
  let btnWrapper = document.createElement('div');
  btnWrapper.classList.add('buttons-wrapper');
  mainWrapper.appendChild(btnWrapper);
  let twoArrows1 = document.createElement('button');
  twoArrows1.classList.add('btn-arrows');
  twoArrows1.setAttribute("onclick", `addData(${0})`);
  btnWrapper.appendChild(twoArrows1);
  twoArrows1.innerHTML = '<<';
  let oneArrow1 = document.createElement('button');
  oneArrow1.classList.add('btn-arrows');
  oneArrow1.setAttribute("onclick", `prevPage()`);
  btnWrapper.appendChild(oneArrow1);
  oneArrow1.innerHTML = '<';
  for (j = 0; j < users.length; j = j + interval) {
    let btnEl = document.createElement('button');
    btnEl.classList.add('button-el');
    btnEl.setAttribute("onclick", `addData(${j})`);
    btnWrapper.appendChild(btnEl);
  }
  for (k = 0; k < Math.ceil(users.length / interval); k++) {
    btnArray = document.getElementsByClassName('button-el');
    btnArray[k].innerHTML = k + 1;
  }
  let oneArrow2 = document.createElement('button');
  oneArrow2.classList.add('btn-arrows');
  oneArrow2.setAttribute("onclick", `nextPage()`);
  btnWrapper.appendChild(oneArrow2);
  oneArrow2.innerHTML = '>';
  let twoArrows2 = document.createElement('button');
  twoArrows2.classList.add('btn-arrows');
  twoArrows2.setAttribute("onclick", `addData(${users.length - usersShown})`);
  btnWrapper.appendChild(twoArrows2);
  twoArrows2.innerHTML = '>>';
}


addButtons(usersShown);
addData(startNumber);