class Point {
    //fields
    private x: number; 
    private y: number;

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    //methods
    draw() {
        console.log('X: ' + this.x + ',Y: ' + this.y);
    }
}

let point = new Point(1, 2);
point.draw();