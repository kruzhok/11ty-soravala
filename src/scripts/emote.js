const checkboxEmote = document.querySelector('.switch-checkbox .checkbox');
const checkboxEmoteDetail = document.querySelector('#switch-detail');
const emote = document.querySelectorAll('.hidden-emotes');
const emoteDB = [checkboxEmote, checkboxEmoteDetail]

//image.classList.remove('hidden-emotes');
console.log('ок')

if(checkboxEmote.checked) {
    emote.forEach(function(e) {
        e.classList.remove('hidden-emotes');
    });
}

function emoteToggle(checkbox) {
    if(checkbox) {
        checkbox.addEventListener('change', function() {
            if (checkbox.checked){
                emote.forEach(function(e) {
                    e.style.opacity = '100%';
                });
            } else {
                emote.forEach(function(e) {
                    e.style.opacity = '0%';
                });
            }
        })
    }
}

let t = 0
for(t;t < emoteDB.length ;t++) {
    emoteToggle(emoteDB[t])
}