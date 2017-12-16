class Sprite {
    constructor(options) {
        this.options = options;
        this.context = options.context;
        this.tick = 0;
        this.frameIndex = 0;
        this.positionX = 0;
        this.positionY = 0;
        this.image = new Image();
        this.image.src = this.options.imageSrc;
        this.direction = this.options.animations.down;
        this.isMoving = false;
        this.stepLength = 10;
        console.log(this.options.ticksPerFrame, this.stepLength);
    }

    render() {
        let me = this,
            context = me.options.canvas.getContext('2d');

        context.clearRect(
            me.positionX - me.stepLength,
            me.positionY - me.stepLength,
            me.options.width + me.stepLength * 2,
            me.options.height + me.stepLength * 2);

        context.drawImage(
            me.image,
            me.frameIndex * me.options.width,
            me.direction * me.options.height,
            me.options.width,
            me.options.height,
            me.positionX,
            me.positionY,
            me.options.width,
            me.options.height
        );

        context.beginPath();
        context.strokeStyle = 'red';
        context.arc(me.positionX + me.options.width / 2, me.positionY + me.options.height - me.options.width / 2, me.options.width / 2 - 1, 0, 2 * Math.PI);
        context.stroke();

        console.log(me.positionX, me.positionY);
    }

    update() {
        let me = this;
        me.tick++;
        if (me.tick > me.options.ticksPerFrame) {
            me.tick = 0;
            me.frameIndex = me.frameIndex < (me.options.numberOfFrames - 1) ? (me.frameIndex + 1) : 0;
            switch (true) {
                case (me.direction === me.options.animations.down):
                    me.positionY = me.positionY > me.options.canvas.height - me.options.height - me.stepLength ?
                        me.options.canvas.height - me.options.height : me.positionY + me.stepLength;
                    break;
                case (me.direction === me.options.animations.up):
                    me.positionY = me.positionY < me.stepLength ? 0 : me.positionY - me.stepLength;
                    break;
                case (me.direction === me.options.animations.left):
                    if(me.canMove()){
                        me.positionX = me.positionX < me.stepLength ? 0 : me.positionX - me.stepLength;
                    }
                    break;
                case (me.direction === me.options.animations.right):
                    if (me.canMove()) {
                        me.positionX = me.positionX > me.options.canvas.width - me.options.width - me.stepLength ?
                            me.options.canvas.width - me.options.width : me.positionX + me.stepLength;
                    }

                    break;
            }
            me.render();
        }
        if (me.isMoving) {
            window.requestAnimationFrame(function () {
                me.update();
            });
        } else {
            window.requestAnimationFrame(function () {
                me.tick = 0;
                me.frameIndex = 0;
                me.render();
            })
        }
    }

    canMove() {
        let me = this,
            width = me.options.width,
            height = me.options.height,
            step = me.stepLength,
            x = me.positionX,
            y = me.positionY + height - width / 2,
            can = false;
        switch (true) {
            case (me.direction === me.options.animations.right):
                can = background.getCollisionAtPoint(x + width + step, y);
                break;
            case (me.direction === me.options.animations.up):
                can = background.getCollisionAtPoint();
                break;
            case (me.direction === me.options.animations.left):
                can = background.getCollisionAtPoint(x - step, y);
                break;
            case (me.direction === me.options.animations.right):
                can = background.getCollisionAtPoint();
                break;
            default:
            //do nothing
        }
        return !can;
    }

    move(direction) {
        let me = this;
        me.isMoving = true;
        me.frameIndex = 0;
        me.direction = me.options.animations[direction];
        console.log('moving', direction);

        me.update();
    }

    stopMoving() {
        let me = this;
        me.isMoving = false;
        me.frameIndex = 0;
        window.requestAnimationFrame(function () {
            me.update();
        });
    }
}