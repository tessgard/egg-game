
boilBtn.addEventListener("click", function (event) {

var timer = 0;
console.log(timer)
var eggTimer = setInterval(function(){
  document.getElementById("counter").innerHTML = timer;
  timer += 1;
  if(timer == 10){
    clearInterval(eggTimer);

    document.getElementById("counter").innerHTML = "you have overcooked the egg :("

    document.querySelector(".cook-instructions").style.display = "none"

    document.querySelector(".boil-egg-btn-2").style.display = "none"

    document.getElementById("egg-in-pan").style.display = "none"

    const tryAgainBtn = document.querySelector(".try-again-display-non");
    tryAgainBtn.classList.add("try-again-btn")
    tryAgainBtn.classList.remove("try-again-display-non")
  }

}, 1000);

});
