var ball = document.getElementById("ball");
var touchStart;
var animation;
var lastDist;
var dist = 0;
var ballWiggle = anime({
  targets: '#ball',
  keyframes: [
    {rotateZ:10},
    {rotateZ: -10},
    {rotateZ: 10},
    {rotateZ: 0},
  ],
  duration: 500,
  delay: 1000,
  loop: true,
  easing: 'easeInOutSine'
});

var ballGrow = anime({
  targets: '#ball',
  scale:"7.3",
  easing: 'easeInOutSine',
  duration: 5000,
  complete: popDiv,
});
ballGrow.pause();

function popDiv(){
  document.body.removeEventListener("touchmove", moved);
  ball.style.transform = "scale(1)";
  ball.style.borderRadius = "0";
  ball.style.height = "100vh";
  ball.style.width = "100vw";
}

function resetBall() {
  
  ball.style.transformOrigin = "bottom"; 
  ballWiggle.play()
}

function touchStart(e){
  touchStart = e.touches[0].clientY;  
  ballWiggle.pause();  
  ball.style.transformOrigin = "center"; 
}

function moved(e) {
  lastDist = dist;
  dist = e.touches[0].clientY - touchStart;
  ballGrow.pause();
  ballGrow.seek((dist/300) * ballGrow.duration);  
}

function touchEnd(e) {
  if (dist <= 0)
    resetBall();
  else if(dist < 305) {
    var rebound = anime({
      targets: '#ball',
      scale:"1",
      duration: 1000,
      complete: resetBall,
    });
  }
}




document.body.addEventListener("touchmove", moved);
document.body.addEventListener("touchstart", touchStart);
document.body.addEventListener("touchend", touchEnd);

