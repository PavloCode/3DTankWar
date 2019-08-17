$(document).ready(function() {
    $('a[href*=#]').bind("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1500);
        e.preventDefault();
    });
    return false;
});


// burger

const burgerBt = document.querySelector('.js-burger-button');
const burgerMenu = document.querySelector('.js-burger-menu');


const animationTop = document.querySelector('.js-burger-top');
const animationMiddle = document.querySelector('.js-burger-middle');
const animationBottom = document.querySelector('.js-burger-bottom');

burgerBt.addEventListener('click', openMenu);
burgerMenu.addEventListener('click', openLink);

function openMenu(e) {
    burgerMenu.classList.toggle('active');
    // animation
    animationTop.classList.toggle('animation-top');
    animationMiddle.classList.toggle('animation-mid');
    animationBottom.classList.toggle('animation-bot');

}

function openLink(e) {
    const target = e.target;
    if (target.nodeName !== "A") return;
    burgerMenu.classList.toggle('active');
    // animation
    animationTop.classList.toggle('animation-top');
    animationMiddle.classList.toggle('animation-mid');
    animationBottom.classList.toggle('animation-bot');

}

// burger end


// player

const playerList = document.querySelector('.player-list');
playerList.addEventListener('click', handleNavClick);

function handleNavClick(event) {
    const target = event.target;
    if (target.nodeName !== "LI") return;
    setActiveLink(target);
}

function setActiveLink(nextActiveLink) {
    const img = nextActiveLink;
    const audio = nextActiveLink.querySelector('audio');
    const previewAudio = playerList.querySelector('.active');
    audio.addEventListener('timeupdate', timeUpdate);
    console.log(audio);
    if (audio.classList.contains('active') && previewAudio.classList.contains('active')) {
        audio.classList.remove('active');

        previewAudio.pause();
        previewAudio.currentTime = 0.0;

        img.classList.remove('stop');
        img.classList.add('play');
    } else {
        img.classList.add('stop');
        img.classList.remove('play');

        audio.classList.add('active');
        audio.play();
    }

    if (previewAudio) {
        previewAudio.classList.remove('active');

        previewAudio.pause();
        previewAudio.currentTime = 0.0;
        const previewImg = previewAudio.parentNode;
        previewImg.classList.remove('stop');
        previewImg.classList.add('play');
        console.log(previewImg);
    }
}

function timeUpdate(event) {
    const target = event.target;
    const trackCurrentTime = target.currentTime;
    const trackDuration = target.duration;
    const img = target.parentNode;
    if (trackCurrentTime === trackDuration) {
        target.classList.remove('active');
        img.classList.remove('stop');
        img.classList.add('play');
    }
}

// player end