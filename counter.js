var timeleft = 10;
var downloadTimer = setInterval(function(){
  document.getElementById("counter").innerHTML = timeleft;
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("counter").innerHTML = "egg is done!"
  }
}, 1000);