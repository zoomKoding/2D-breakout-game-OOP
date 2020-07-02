class Paddle {
    constructor(canvas){
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.paddleHeight = 10;
        this.paddleWidth = 75;
        this.paddleX = (canvas.width-this.paddleWidth)/2;
        this.dx = 20;
    }

    draw() {
        this.context.beginPath();
        this.context.rect(this.paddleX, this.canvas.height- this.paddleHeight, this.paddleWidth, this.paddleHeight);
        this.context.fillStyle = "#0095DD";
        this.context.fill();
        this.context.closePath();
    }

    moveRight() {
        if(this.paddleX < this.canvas.width - this.paddleWidth) this.paddleX += this.dx;
    }

    moveLeft() {
        if(this.paddleX > 0) this.paddleX -= this.dx;
    }
    
    hasBall(ball) {
        return ball.getX() >= this.paddleX && ball.getX() <= this.paddleX + this.paddleWidth;
    }
}