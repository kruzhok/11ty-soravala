const tumbler  = document.querySelector('.switch-checkbox .checkbox')
const photos = document.querySelectorAll('.grid-list .image-small')
const detailTumbler = document.querySelector('#switch-detail');
const photosDetail = document.querySelectorAll('.page-image');
const gridTumbler = document.querySelector('#switch-2');
const tumblerMobile = document.querySelector('#switch-3');

function setImageSmall(tumbler, PhotoName) {
  setImageStateAndTurnItOn(tumbler, PhotoName, 'image-small--fantasy', 'image-small--reality', 'hidden-image')
}
function setPageImage(tumbler, PhotoName) {
  setImageStateAndTurnItOn(tumbler, PhotoName, 'page-image--fantasy', 'page-image--real', 'hidden-image')
}

let getImagesInterval = setInterval(function(){
  setImageSmall(tumbler, photos)
  setImageSmall(tumbler, document.querySelectorAll('.backgr-image'))
  setImageSmall(gridTumbler, photos)
  setImageSmall(tumblerMobile, photos)
  setImageSmall(tumblerMobile, document.querySelectorAll('.backgr-image'))
  setPageImage(tumblerMobile, photosDetail)
  setPageImage(tumbler, photosDetail)
  setPageImage(detailTumbler, photosDetail)
}, 5000)

window.onunload = () => clearInterval(getImagesInterval);



tumbler.checked && [
  toggleImage(photos, tumbler.checked, 'image-small--fantasy', 'image-small--reality', 'hidden-image'),
  toggleImage(photosDetail, tumbler.checked, 'page-image--fantasy', 'page-image--real', 'hidden-image'),
  toggleImage(document.querySelectorAll('.backgr-image'), tumbler.checked, 'image-small--fantasy', 'image-small--reality', 'hidden-image'),
]

function setImageStateAndTurnItOn(tumblerName, photosToChange, fantasyPhotoClassName, realPhotoClassName, toggleClassName) {
  let tumbler = tumblerName;
  if (tumbler) {
    tumbler.addEventListener('change', function() {
      let state = tumbler.checked;
      toggleImage(photosToChange, state, fantasyPhotoClassName, realPhotoClassName, toggleClassName);
    })
  }
}


function toggleImage(photoArray, state, fantasyPhotoClassName, realPhotoClassName, toggleClassName) {

  const photos = photoArray;
  if(state) {
    photos.forEach(function(image) {
      if([...image.classList].includes(fantasyPhotoClassName)) {
        image.classList.remove(toggleClassName);
      }
      if([...image.classList].includes(realPhotoClassName)) {
        image.classList.add(toggleClassName);
      }
    })
   } else {
    photos.forEach(function(image) {
      if([...image.classList].includes(fantasyPhotoClassName)) {
        image.classList.add(toggleClassName);
      }
      if([...image.classList].includes(realPhotoClassName)) {
        image.classList.remove(toggleClassName);
      }
    })
   }
}
