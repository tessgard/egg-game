let playBtn = document.querySelector(".play-btn");

playBtn.addEventListener("click", function (event) {

  document.querySelector(".main-game-container").style.display = "block";

  document.querySelector(".main-welcome-container").style.display = "none";

  document.querySelector("body").classList.remove("body-background")

});

let boilBtn = document.querySelector(".boil-egg-btn");
boilBtn.addEventListener("click", function (event) {

  const gameBox2 = document.querySelector(".game-box-2");
  gameBox2.classList.add("game-box-2-on-click")

  gameBox2.classList.remove("game-box-2")

  document.querySelector(".game-box").style.display = "none";
});

let againBtn = document.querySelector(".again-btn");
againBtn.addEventListener("click", function (event) {

  document.reload()
  
});

