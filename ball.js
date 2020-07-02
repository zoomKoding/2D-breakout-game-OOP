class Ball {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.radius = 10;
        this.x = canvas.width/2;
        this.y = canvas.height-30;
        this.dx = 2;
        this.dy = -2;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }
    
    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.beginPath();
        this.context.arc(this.x, this.y, 10, 0, Math.PI*2);
        this.context.fillStyle = "#0095DD";
        this.context.fill();
        this.context.closePath();
        this.x += this.dx;
        this.y += this.dy;
    }

    collide() {
        const futureX = this.x + this.dx;
        const futureY = this.y + this.dy;
        let hitBottom = false;
        if(futureX < this.radius || futureX > this.canvas.width - this.radius){
            this.dx = -this.dx;
        }
        if(futureY < this.radius || futureY > this.canvas.height - this.radius){
            this.dy = -this.dy;
        }
        if(futureY > this.canvas.height - this.radius) hitBottom = true;
        
        return { hitBottom };
    }

    
}