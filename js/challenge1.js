var checkbox = document.getElementById('toggle');
var email = document.getElementById('emailBox');

function emailToggle(){
    if (checkbox.checked){
        email.classList.remove('hidden');
    }
    else{
        email.classList.add('hidden');
    }
}
