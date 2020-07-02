class Game {
    constructor(canvas){
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.x = canvas.width/2;
        this.y = canvas.height-30;
        this.score = 0;
        this.lives = 3;
        this.ball = new Ball(canvas);
        this.paddle = new Paddle(canvas);
    }
    
    draw(self) {
        self.ball.draw();
        self.paddle.draw();
        self.collide();   
    }

    collide(self) {
        const { hitBottom } = self.ball.collide();
        if(hitBottom && !self.paddle.hasBall(self.ball)){
            alert("GAME OVER");
            document.location.reload();
        }
    }
    
    keyDownHandler(e, self) {
        if(e.keyCode == 39) {
            self.paddle.moveRight();
        }
        else if(e.keyCode == 37) {
            self.paddle.moveLeft();
        }
    }

    start() {
        setInterval(this.draw, 10, this);
        document.addEventListener("keydown", (e) => this.keyDownHandler(e, this), false);
    }
}