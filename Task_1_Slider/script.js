let mainImgEl = document.getElementById('mainImg');
const btnDots = document.getElementsByClassName('btn-dot');
let currentPhoto = 0;

let photos = [
  "./img/photo1.png",
  "./img/photo2.png",
  "./img/photo3.png",
  "./img/photo4.png",
  "./img/photo5.png",
  "./img/photo6.png"
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