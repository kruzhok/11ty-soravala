const checkboxEmote = document.querySelector('.switch-checkbox .checkbox');
const checkboxEmoteDetail = document.querySelector('#switch-detail');
const checkboxMobileEmote = document.querySelector('#switch-3');
const emote = document.querySelectorAll('.emotion');
const emoteDB = [checkboxEmote, checkboxEmoteDetail, checkboxMobileEmote]

//image.classList.remove('hidden-emotes');
console.log('ок')

if(checkboxEmote.checked) {
    emote.forEach(function(e) {
        e.style.display = 'flex';
        setTimeout(()=>{
            e.style.opacity = '1';
        }, 300)
    });
} else {
    emote.forEach(function(e) {
        setTimeout(()=>{
            e.style.display = 'none';
        }, 300)  
        e.style.opacity = '0';      
    });
}

function emoteToggle(checkbox) {
    if(checkbox) {
        checkbox.addEventListener('change', function() {
            if (checkbox.checked){
                emote.forEach(function(e) {
                    e.style.display = 'flex';
                    setTimeout(()=>{
                        e.style.opacity = '1';
                    }, 300)
                });
            } else {
                emote.forEach(function(e) {
                    setTimeout(()=>{
                        e.style.display = 'none';
                    }, 300)  
                    e.style.opacity = '0';      
                });
            }
        })
    }
}

let t = 0
for(t;t < emoteDB.length ;t++) {
    emoteToggle(emoteDB[t])
}