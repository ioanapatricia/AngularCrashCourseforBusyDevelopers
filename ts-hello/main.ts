class Point {
    //fields
    x: number; 
    y: number;

    //methods
    draw() {
        console.log('X: ' + this.x + ',Y: ' + this.y);
    }

    getDistance(another: Point) {
        // ...
    }
}

let point = new Point(); //Object --> instance of a class
point.x = 1;
point.y = 2;
point.draw();