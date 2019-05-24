
boilBtn.addEventListener("click", function (event) {

var timer = 0;
var eggTimer = setInterval(function(){
  document.getElementById("counter").innerHTML = timer;
  timer += 1;
  if(timer == 10){
    clearInterval(eggTimer);

    document.getElementById("counter").innerHTML = "you have overcooked the egg :("

    document.querySelector(".cook-instructions").style.display = "none"

    document.querySelector(".remove-egg-btn").style.display = "none"

    document.getElementById("egg-in-pan").style.display = "none"

    const tryAgainBtn = document.querySelector(".try-again-display-non");
    tryAgainBtn.classList.add("try-again-btn")
    tryAgainBtn.classList.remove("try-again-display-non")
  }

}, 1000);

let removeEggBtn = document.querySelector(".remove-egg-btn");
removeEggBtn.addEventListener("click", function (event) {

  if(timer >5 ){
    const gameBox2 = document.querySelector(".game-box-2-on-click");
    gameBox2.style.display = "none";

    const gameBoxUnder = document.querySelector(".game-box-3");
    gameBoxUnder.classList.add("game-box-3-on-click")
    gameBoxUnder.classList.remove("game-box-3")
    }

  else if(timer <5 ){

    const gameBox2 = document.querySelector(".game-box-2-on-click");
    gameBox2.style.display = "none";

    const gameBoxUnder = document.querySelector(".game-box-undercooked-display-none");
    gameBoxUnder.classList.add("game-box-undercooked")
    gameBoxUnder.classList.remove("game-box-undercooked-display-none")
    }
  
});

let eatBtn = document.querySelector(".eat-egg");
eatBtn.addEventListener("click", function (event) {

  const gameBox4 = document.querySelector(".game-box-4");
  gameBox4.classList.add("game-box-4-on-click")
  gameBox4.classList.remove("game-box-4")

  const gameBox3 = document.querySelector(".game-box-3-on-click");

  gameBox3.style.display = "none";
  
});



});
