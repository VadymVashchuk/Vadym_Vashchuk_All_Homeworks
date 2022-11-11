let mainImgEl = document.getElementById('mainImg');
let btnDots = document.getElementsByClassName('btn-dot');
let currentPhoto = 0;

function directPhotoChange(photoNumb) {
  mainImgEl.src = photos[photoNumb];
  currentPhoto = photoNumb;
  btnColorChange();
}

function photoChangeNext() {
  currentPhoto++;
  if (currentPhoto === photos.length) {
    currentPhoto = 0;
  }
  mainImgEl.src = photos[currentPhoto];
  btnColorChange()
}

function photoChangePrev() {
  currentPhoto--;
  if (currentPhoto === -1) {
    currentPhoto = photos.length - 1;
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