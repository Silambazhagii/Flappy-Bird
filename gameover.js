var play = document.querySelector(".play_again")
var score = document.getElementById("overallScore");

play.onclick=()=>{
    window.location.href = "game.html"
    sessionStorage.removeItem("scr")
}
score.innerText = sessionStorage.getItem("scr") || 0;
