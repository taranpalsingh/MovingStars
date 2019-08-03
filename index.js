let W = window.innerWidth;
let H = window.innerHeight;

window.requestAnimationFrame = function(){   // To tell the browser about the animation.
  return window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  function(f){
    setTimeout(f, 1000/60);
  }
}();

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

canvas.width = W;
canvas.height = H;

function windowResized(){
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}

addEventListener("resize", windowResized);

$(document).ready( function renderFrame() {

  requestAnimationFrame(renderFrame);
  ctx.clearRect(0, 0, W, H);

  this.x += this.x*Math.cos(this.theta);
  this.y += this.y*Math.sin(this.theta);
  //   ball[i].draw(ctx);
  // }
}());

function Ball(mousex, mousey) {
  this.color = getRandomColor();
  this.radius = 2;

  this.x = Math.random()*canvas.width;
  this.y = Math.random()*canvas.height;
  this.theta =
  this.vx = (randomVal * 10);
  if( randomVal % 2 > 0.5)
    this.vx *= -1;

  // this.vx = -10;
  this.vy = 0;

  this.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.x,
      this.y,
      this.newRadius,
      0,
      Math.PI*2,
      false
    );

    ctx.closePath();
    ctx.fill();
  }
}
