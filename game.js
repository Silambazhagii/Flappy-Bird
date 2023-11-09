var tower = document.getElementById("block");
var hole = document.getElementById("hole");
var bird = document.querySelector(".bird");
var body = document.querySelector(".body3");
var timer = document.getElementById("time");
var score = document.getElementById("scr");
const main = document.querySelector("#game");


let birdLeft = 100;
let birdBottom = 370;
let isGameOver = false;
gap = 450;

const gravity = 1;
let jumping = 0;

function start() {
    if (jumping == 0) {
        birdBottom -= gravity;
        bird.style.bottom = birdBottom + 'px';
        bird.style.left = birdLeft + 'px';
    }
    // if (birdBottom>550){
    //     window.location.href = "gameover.html"
    // }
    // else if(birdBottom<10){
    //     window.location.href = "gameover.html"
    // }
}
let gameTimerId = setInterval(start, 10);

// let flap = new Audio("flap.mp3")

// body.onclick=()=>{
//     flap.pause()
//     flap.currentTime=0;
//     flap.play()
// }
// const bgm = new Audio("Flappy Bird Theme Song.mp3")
// bgm.play()
// bgm.loop = true;

function jump() {
    if (jumping === 0) {
        jumping = 1;
        var jumpCount = 0;
        var jumpInterval = setInterval(function () {
            birdBottom += 10;
            bird.style.bottom = birdBottom + 'px';
            bird.style.left = birdLeft + 'px';
            jumpCount++;
            if (jumpCount >= 5) {
                clearInterval(jumpInterval);
                jumping = 0;
            }
        }, 10);
    }
}

body.addEventListener('click', jump);

scr = 0
let countdown = 0;
const timeinterval = setInterval(() => {
    countdown++;
    if (countdown % 5 == 0) {
        scr++
        score.innerText = scr
    }
    timer.innerText = countdown;
}, 1000);

function generateTower() {
    let towerLeft = 1265;
    let randomHeight = -(Math.random() * 100) + 10
    let towerBottom = randomHeight;
    const tower = document.createElement('div')
    const topTower = document.createElement('div')

    tower.classList.add('tower')
    topTower.classList.add('topTower')
    main.appendChild(tower)
    main.appendChild(topTower)
    tower.style.left = towerLeft + 'px'
    topTower.style.left = towerLeft + 'px'
    tower.style.bottom = towerBottom + 'px'
    topTower.style.bottom = towerBottom + gap + 'px'
    function moveTower() {
        towerLeft -= 3
        tower.style.left = towerLeft + 'px'
        topTower.style.left = towerLeft + 'px'
        if (towerLeft === -50) {
            clearInterval(timerId)
            main.removeChild(tower)
            main.removeChild(topTower)
            
        }
        if (tower > 200 && towerLeft < 280 && birdLeft === 220 && birdBottom === 0) {
            gameOver()
            clearInterval(timerId)
        }
    }
    let timerId = setInterval(moveTower, 20)
    setTimeout(generateTower, 1700)
}
generateTower()

function gameOver() {
    clearInterval(gameTimerId)
    console.log('game over')
    isGameOver = true
    document.removeEventListener('click', jump)
}