class Background {
    constructor() {
        this.canvas = document.getElementById("background_layer");
    }

    load() {
        let context = this.canvas.getContext('2d');
        context.beginPath();
        context.moveTo(200, 30);
        context.lineTo(200, 300);
        context.lineWidth = 10;
        context.strokeStyle = 'blue';
        context.lineCap = 'round';
        context.stroke();
        console.log("background loaded");
    }

    getCollisionAtPoint(x,y){
        return this.canvas.getContext('2d')
            .getImageData(x, y, 1, 1)
            .data[2]===255;
    }
}