const sendData = document.getElementById('sendData');

const newClient = {
  clientName: document.getElementById('clientName'),
  clientAge: document.getElementById('clientAge'),
  clientWeight: document.getElementById('clientWeight'),
  clientHeight: document.getElementById('clientHeight'),
}

function registration() {
  let nameValue = newClient.clientName.value;
  let ageValue = newClient.clientAge.value;
  let weightValue = newClient.clientWeight.value;
  let heightValue = newClient.clientHeight.value;

  let baseErrorMessage = ", ми змушені повідомити, що Ви не зможете відвідувати наш зал"

  if (!nameValue || !ageValue || weightValue === "" || heightValue === "") {     // Тут використано два варіанти задання цієї умови
    alert("Будь ласка, заповніть форму до кінця!");
    return;
  } else if (ageValue < 18 || ageValue > 60) {
    alert("Зважаючи на Ваш вік" + baseErrorMessage);
  } else if (weightValue < 60 || weightValue > 120) {
    alert("Зважаючи на Вашу вагу" + baseErrorMessage);
  } else if (heightValue < 160 || heightValue > 195) {
    alert("Зважаючи на Ваш зріст" + baseErrorMessage);
  } else if (heightValue - weightValue > 130 || heightValue - weightValue < 70) {
    alert("Зважаючи на співвідношення Вашої ваги та зросту" + baseErrorMessage);
  } else {
    alert("Вітаємо, " + nameValue + "! Ви зареєстровані.");
  }
  clearAll();
}

function clearAll() {
  newClient.clientName.value = "";
  newClient.clientAge.value = "";
  newClient.clientWeight.value = "";
  newClient.clientHeight.value = "";
}
