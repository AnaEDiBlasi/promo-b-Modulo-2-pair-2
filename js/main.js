const face = document.querySelector('.js-face');

function handleClick(){
    face.innerHTML = ';)';
}

face.addEventListener('click', handleClick);

function handleReset(){
    face.innerHTML = ':)';
    console.log("holisss");
}

face.addEventListener('mouseout', handleReset);
