class Boid {
    constructor() {
        this.position = createVector(random(width), random(height));
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(0.5, 1.5));
        this.acceleration = createVector();
        this.alignRadius = random(10, 100);
    }

    align(boids, showRadius) {
        let average = createVector();
        let count = 0;
        for (let other of boids) {
            if (other != this && this.position.dist(other.position) < this.alignRadius) {
                if (showRadius) {
                    strokeWeight(3);
                    stroke(100, 0, 0);
                    noFill();
                    circle(this.position.x, this.position.y, this.alignRadius);
                }

                average.add(other.velocity);
                count++;
            }


        }
        if (count > 0) {
            average.div(count);
            average.sub(this.velocity)
        }
        return average;
    }
    flock(boids, showAlignRadius) {
        let alignment = this.align(boids, showAlignRadius);
        this.acceleration = alignment;
    }

    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        // this.acceleration.mult(0.9);
        if (this.position.x > width + 8) this.position.x = -7;
        if (this.position.x < -8) this.position.x = width + 7;
        if (this.position.y > height + 8) this.position.y = -7;
        if (this.position.y < -8) this.position.y = height + 7;
    }


    show() {
        strokeWeight(16);
        stroke(255);
        point(this.position.x, this.position.y);
    }
}