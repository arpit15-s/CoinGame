function isTouching(a, b){
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
        aRect.top + aRect.height < bRect.top ||
        aRect.top > bRect.top + bRect.height ||
        aRect.left + aRect.width < bRect.left ||
        aRect.left > bRect.left + bRect.width
    );
}

const avatar = document.querySelector('#player');

const jackpot = document.querySelector('#coin')

const moveCoin = () => {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    jackpot.style.top = `${y}px`;
    jackpot.style.left = `${x}px`;
}

window.addEventListener('keyup', function(e) {

    if (isTouching(avatar, jackpot)) moveCoin();

    console.log(e.key);
    if(e.key === 'ArrowDown' || e.key === 'Down'){
        const currTop = extractPos(avatar.style.top);
        avatar.style.top = `${currTop + 50}px`;
    } 

    else if (e.key === 'ArrowUp' || e.key === 'Up') {
        const currTop = extractPos(avatar.style.top);
        avatar.style.top = `${currTop - 50}px`;
    }

    else if (e.key === 'ArrowRight' || e.key === 'Right') {
        const currLeft = extractPos(avatar.style.left);
        avatar.style.left = `${currLeft + 50}px`;
        avatar.style.transform = 'scale(1, 1)';
    }

    else if (e.key === 'ArrowLeft' || e.key === 'Left') {
        const currLeft = extractPos(avatar.style.left);
        avatar.style.left = `${currLeft - 50}px`;
        avatar.style.transform = 'scale(-1, 1)'
    }

});

const extractPos = (pos) => {
    if(!pos) return 0;
    return parseInt(pos.slice(0, -2));
};

