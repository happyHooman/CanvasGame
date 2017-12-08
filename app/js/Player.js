class Player{
    constructor(name){
        this.name = name;
        this.canvas = document.getElementById("playerCanvas");
        this.options = {
            context: this.canvas.getContext("2d"),
            imageSrc: "img/rpg.png",
            numberOfFrames: 4,
            ticksPerFrame: 3,
            width: 34,
            height: 52,
            animations: {
                down: 0,
                left: 1,
                right: 2,
                up: 3
            }
        };
        this.sprite = new Sprite(this.options);
        this.sprite.render();
    }

    initialize(){
        document.onkeydown = function (e) {
            this.move(e);
        }
        document.onkeyup = function () {
            this.stopMoving();
        }
    }

    move(e){
        e.preventDefault();
        if (e.repeat) {
            return
        }
        switch (e.keyCode) {
            case 37:
                this.sprite.move('left');
                break;
            case 38:
                this.sprite.move('up');
                break;
            case 39:
                this.sprite.move('right');
                break;
            case 40:
                this.sprite.move('down');
                break;
            default:
            //do nothing
        }
    }

    stopMoving(){
        this.sprite.stopMoving();
    }

}