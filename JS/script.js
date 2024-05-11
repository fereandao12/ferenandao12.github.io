



function showRegister(){
    var register = document.getElementById('register');
    register.classList.add('show')
}

function hideRegister(){
    var register = document.getElementById('register');
    register.classList.remove('show')
}

var sound = new Audio();
sound.src = "audio/click.mp3"
sound.volume = 0.35