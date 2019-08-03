// get the theory behind:
// http://nepraunig.com/wp/?p=117

let W = window.innerWidth;
let H = window.innerHeight;

let speed = 5, balls = [], initialBalls =10;

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = W;
canvas.height = H;

function newBall(){
    for(let i=0; i<initialBalls; i++){
        balls.push(new Ball());
    }
}

newBall();

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);    
    
    // Math.PI/180 is for transforming angle into radiant
    // Math.cos(angle) is the ratio of adjacent to hypothenuse
    // Math.sin(angle) is the ratio of opposite to hypothenuse
    // the hypothenuse is the radius
    balls.forEach(ball => {
    
        ball.newX  = ball.radius * Math.cos(ball.angle * (Math.PI/180));
        ball.newY = ball.radius * Math.sin(ball.angle * (Math.PI/180));
        ball.x = ball.newX + ball.circleCenterX;
        ball.y = ball.newY + ball.circleCenterY;
        ball.angle += speed; 

        ctx.fillStyle = "#F00";
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.innerRadius, 0, Math.PI*2, false);
        
        ctx.closePath();
        ctx.fill();
    });
    
    setTimeout(animate, 60);
}

function Ball(){
    this.x = Math.random()*(W-2*this.innerRadius) + 1.2*this.innerRadius;
    this.y = Math.random()*(H-2*this.innerRadius) + 1.2*this.innerRadius;
    this.newX = 0;
    this.newY = 0;
    this.angle = 0;
    this.innerRadius = 5;
    this.radius = Math.random()*10 + 50;
    this.circleCenterX = Math.random()*(W-2*this.radius) + 2*this.radius;
    this.circleCenterY = Math.random()*(H-2*this.radius) + 2*this.radius;

}

animate();