var Ball = function(x, y, vx, vy) {
    // body...
    this.accX = 1.5;
    this.accY = 1.2;

    var width = 22;
    var height = width;
    Shape.call(this, x, y, width, height, "Ball", "Ball");
    this.velocityX = vx;
    this.velocityY = vy;
    this.isStopped = true;

}

Ball.prototype = Object.create(MovingShape.prototype);
Ball.prototype.constructor = Ball;

Ball.prototype.checkCollision = function(obj) {
    var coll = MovingShape.prototype.checkCollision.call(this, obj);
    return coll;

}

