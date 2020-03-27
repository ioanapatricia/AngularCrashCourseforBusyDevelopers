class Point {
    //fields
    x: number; 
    y: number;

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    //methods
    draw() {
        console.log('X: ' + this.x + ',Y: ' + this.y);
    }

    getDistance(another: Point) {
        // ...
    }
}

let point = new Point();
point.draw();