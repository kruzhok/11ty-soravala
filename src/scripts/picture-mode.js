const tumbler  = document.querySelector('.switch-checkbox-2 .checkbox-2')
const photos = document.querySelectorAll('.grid-list .image-small')


setImageStateAndTurnItOn(tumbler, photos, 'image-small--fantasy', 'image-small--reality', 'hidden-image')


const detailTumbler = document.querySelector('#switch-detail');
const photosDetail = document.querySelectorAll('.page-image');

setImageStateAndTurnItOn(detailTumbler, photosDetail, 'page-image--fantasy', 'page-image--real', 'hidden-image')



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
