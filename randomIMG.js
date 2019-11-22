const body = document.querySelector("body");

const IMG_NUMBER = 5; //전체 이미지 수

function paintImage(imageNumber){ //랜덤 수 받아 이미지 생성
    const image = new Image();
    image.src = `images/${imageNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRandom(){ //랜덤한 수 만들기
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();