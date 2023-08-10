var  crashRide = document.getElementById('crash-ride'),
	 hiHatTop = document.getElementById('hihat-top');

const animateCrashOrRide = () => {
		crashRide.style.transform = 'rotate(0deg) scale(1.5)';
	};

const animateHiHatClosed = () => {
		hiHatTop.style.top = '171px';
	};

var play = function(e){
    var key = e.keyCode;
    var keyE = document.querySelector(`div[data-key= "${key}" ]`);
    if(!keyE) return;
    var audio = document.querySelector(`audio[data-key="${key}"]`)
    audio.currentTime  = 0
    audio.play();

    switch(key){
        case 75:
            animateHiHatClosed()
            break;
        case 82:
            animateCrashOrRide()
            break;
    }

    keyE.classList.add('playing');
    keyE.addEventListener('transitionend', RePlaying)

    crashRide.addEventListener('transitionend', ReCrashRide)

    hiHatTop.addEventListener('transitionend', ReHiHatTop)
}

var RePlaying = function(e)
{
	e.target.classList.remove('playing')
}

var ReCrashRide = function(e){
    e.target.style.transform = 'rotate(-7.2deg) scale(1.5)'
}

var ReHiHatTop = function(e){
    e.target.style.top = '166px'
}   



window.addEventListener('keydown', play)