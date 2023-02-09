const preloader = document.querySelector('.preloader');
const preloaderTitle = document.querySelector('.preloader__title');
const root = document.querySelector('.root');

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

delay(100)
  .then(()=>preloader.classList.add('fadedIn'))

delay(2000)
  .then(()=>preloaderTitle.classList.add('fadedIn'))

delay(3000)
.then(()=>{
  preloader.classList.remove('fadedIn');
  preloader.classList.remove('fadedOut');
}
)

delay(3000)
  .then(()=>root.classList.add('fadedIn'))

delay(6000)
  .then(()=>preloader.style.display = 'none')






