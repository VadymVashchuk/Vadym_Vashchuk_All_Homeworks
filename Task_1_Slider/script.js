let mainImgEl = document.getElementById('mainImg');
const btnDot0 = document.getElementById('btnDot0');
const btnDot1 = document.getElementById('btnDot1');
const btnDot2 = document.getElementById('btnDot2');
const btnDot3 = document.getElementById('btnDot3');
const btnDot4 = document.getElementById('btnDot4');
const btnDot5 = document.getElementById('btnDot5');
let currentPhoto = 0;

let photos = [
  "./img/photo1.png",
  "./img/photo2.png",
  "./img/photo3.png",
  "./img/photo4.png",
  "./img/photo5.png",
  "./img/photo6.png"
]

let btnDots = [
  btnDot0,
  btnDot1,
  btnDot2,
  btnDot3,
  btnDot4,
  btnDot5
]

function directPhotoChange(photoNumb) {
  mainImgEl.src = photos[photoNumb];
  currentPhoto = photoNumb;
  btnColorChange();
}

function photoChangeNext() {
  currentPhoto++;
  if (currentPhoto === 6) {
    currentPhoto = 0;
  }
  mainImgEl.src = photos[currentPhoto];
  btnColorChange()
}

function photoChangePrev() {
  currentPhoto--;
  if (currentPhoto === -1) {
    currentPhoto = 5;
  }
  mainImgEl.src = photos[currentPhoto];
  btnColorChange()
}

function btnColorChange() {
  for (i = 0; i < btnDots.length; i++) {
    btnDots[i].classList.remove('active');
  }
  btnDots[currentPhoto].classList.add('active');
}