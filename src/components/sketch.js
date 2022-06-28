export default function sketch(p) {

    let particles = [];

    let parti

    p.setup = () => {

        p.createCanvas(window.innerWidth, window.innerHeight);

        const particlesLength = Math.floor(window.innerWidth / 50);

        for (let i = 0; i < particlesLength; i++) {
            particles.push(new Particle())
        }
        
        parti = new Parti()

    }

    p.draw = () => {

        p.background(0, 0, 0)

        particles.forEach((par, index) => {
            par.update();
            par.drawPart();
            par.checkParticles(particles.slice(index))
        });

        parti.drawParti()
        parti.checkParticles(particles)


    }

    p.windowResized = () => {

        p.createCanvas(window.innerWidth, window.innerHeight);

        particles = []

        const particlesLength = Math.floor(window.innerWidth / 50);

        for (let i = 0; i < particlesLength; i++) {
            particles.push(new Particle())
        }

    }

    class Particle {

        constructor() {

            //position
            this.pos = p.createVector(p.random(p.width), p.random(p.height));
            //velocity
            this.vel = p.createVector(p.random(-0.5, 0.5), p.random(-0.5, 0.5));
            //size
            this.size = p.random(5, 15);
            //color
            this.color = p.color(`rgba(208, 214, 249, ${p.random(0.1, 1)})`);

        }

        //update movement by adding velocity
        update() {
            this.pos.add(this.vel);
            this.edges();
        }

        //draw single paricle
        drawPart = () => {

            p.noStroke();

            p.fill(this.color);

            p.circle(this.pos.x, this.pos.y, this.size);

        }

        //detect edges
        edges() {
            if (this.pos.x < 0 || this.pos.x > p.width) {
                this.vel.x *= -1;
            }

            if (this.pos.y < 0 || this.pos.y > p.height) {
                this.vel.y *= -1;
            }
        }

        //connect particles
        checkParticles(particles) {
            particles.forEach(part => {
                const d = p.dist(this.pos.x, this.pos.y, part.pos.x, part.pos.y);

                if (d < 200) {
                    p.stroke('rgba(255, 255, 255, 0.3)')
                    p.line(this.pos.x, this.pos.y, part.pos.x, part.pos.y);
                }
            });
        }

    }

    class Parti {

        constructor() {

            //size
            this.size = p.random(5, 15);
            //color
            this.color = p.color(`rgba(208, 214, 249, ${p.random(0.1, 1)})`);

        }

        //draw single paricle
        drawParti = () => {

            p.noStroke();

            p.fill(this.color);

            p.circle(p.mouseX, p.mouseY, this.size);

        }

        //connect particles
        checkParticles(particles) {
            particles.forEach(part => {
                const d = p.dist(p.mouseX, p.mouseY, part.pos.x, part.pos.y);

                if (d < 250) {
                    p.stroke('rgba(255, 255, 255, 0.3)')
                    p.line(p.mouseX, p.mouseY, part.pos.x, part.pos.y);
                }
            });
        }

    }

}