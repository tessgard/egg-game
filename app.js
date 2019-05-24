let playBtn = document.querySelector(".play-btn");

playBtn.addEventListener("click", function (event) {

  document.querySelector(".main-game-container").style.display = "block";

  document.querySelector(".main-welcome-container").style.display = "none";
});

let boilBtn = document.querySelector(".boil-egg-btn");
boilBtn.addEventListener("click", function (event) {

  const gameBox2 = document.querySelector(".game-box-2");
  gameBox2.classList.add("game-box-2-on-click")

  gameBox2.classList.remove("game-box-2")
  

  document.querySelector(".game-box").style.display = "none";
});

let removeEggBtn = document.querySelector(".boil-egg-btn-2");
removeEggBtn.addEventListener("click", function (event) {

  const gameBox3 = document.querySelector(".game-box-3");
  gameBox3.classList.add("game-box-3-on-click")
  gameBox3.classList.remove("game-box-3")

  const gameBox2 = document.querySelector(".game-box-2-on-click");

  gameBox2.style.display = "none";
  
});

let eatBtn = document.querySelector(".finish-egg-btn");
eatBtn.addEventListener("click", function (event) {

  const gameBox4 = document.querySelector(".game-box-4");
  gameBox4.classList.add("game-box-4-on-click")
  gameBox4.classList.remove("game-box-4")

  const gameBox3 = document.querySelector(".game-box-3-on-click");

  gameBox3.style.display = "none";
  
});

let againBtn = document.querySelector(".again-btn");
againBtn.addEventListener("click", function (event) {

  document.reload()
  
});