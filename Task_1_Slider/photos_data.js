let dotsWrapper = document.getElementById('dotsWrapper');

let photos = [
  "./img/photo1.png",
  "./img/photo2.png",
  "./img/photo3.png",
  "./img/photo4.png",
  "./img/photo5.png",
  "./img/photo6.png"
]

function addButtons() {
  for (i = 0; i < photos.length; i++)
    if (i === 0) {
      dotsWrapper.innerHTML += "<button class='btn-dot active' onclick='directPhotoChange(" + i + ")' id='dot" + i + "'></button>";
    } else {
      dotsWrapper.innerHTML += "<button class='btn-dot' onclick='directPhotoChange(" + i + ")' id='dot" + i + "'></button>";
    }
}

addButtons();
