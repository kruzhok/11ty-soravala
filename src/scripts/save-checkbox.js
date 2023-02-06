const checkbox  = document.querySelector('.switch-checkbox .checkbox');
const detailCheckbox = document.querySelector('#switch-detail');
const gridCheckbox = document.querySelector('#switch-2');
const checkboxMobile = document.querySelector('#switch-3');
const checkboxDB = [checkbox, gridCheckbox, checkboxMobile, detailCheckbox]

checkbox.addEventListener('change', function() {
  checkboxDB.forEach(item => {
    if(item) {
      item.checked = checkbox.checked;
    }
  })
})
if(checkboxMobile) {
  checkboxMobile.addEventListener('change', function() {
    checkboxDB.forEach(item => {
      if(item) {
        item.checked = checkboxMobile.checked;
      }
    })
  })
}

function checkboxEventListener(checkbox) {
  if(checkbox) {
    checkbox.addEventListener('change', function() {
      localStorage.setItem('checkboxValue', this.checked);
    });
  }
}

function checkboxChecked(checkbox) {
    if (checkbox) {
        checkbox.checked = JSON.parse(localStorage.getItem('checkboxValue'));
    }
}

let i = 0
for(i; i < checkboxDB.length; i++) {
    checkboxChecked(checkboxDB[i])
}

checkboxEventListener(checkbox)
checkboxEventListener(checkboxMobile)
