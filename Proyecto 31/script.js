var particles = [];
var plinkos = [];
var divisions = [];
var borders = [];
var ground;
function setup() {
    canvas = new Canvas(640, 600);
    for (let i = 80; i < canvas.width - 80; i += 50) {
        plinkos.push(new Plinko(i, 75));
    }
    for (let i = 60; i < canvas.width - 60; i += 50) {
        plinkos.push(new Plinko(i, 150));
    }
    for (let i = 80; i < canvas.width - 80; i += 50) {
        plinkos.push(new Plinko(i, 225));
    }
    for (let i = 60; i < canvas.width - 60; i += 50) {
        plinkos.push(new Plinko(i, 300));
    }
    for (let i = 0; i <= canvas.width; i += 80) {
        divisions.push(new Division(i, canvas.height * 0.81));
    }
    var border1 = physics.rectangle(canvas.width / 2, 0, canvas.width, 10, {isStatic: true});
    borders.push(border1);
    var border2 = physics.rectangle(canvas.width / 2, canvas.height, canvas.width, 10, {isStatic: true});
    borders.push(border2);
    var border3 = physics.rectangle(0, canvas.height / 2, 10, canvas.height, {isStatic: true});
    borders.push(border3);
    var border4 = physics.rectangle(canvas.width, canvas.height / 2, 10, canvas.height, {isStatic: true});
    borders.push(border4);
    ground = new Ground();
}
function draw() {
    canvas.color(0);
    for (let i = 0; i < plinkos.length; i++) {
        plinkos[i].display();
    }
    for (let i = 0; i < borders.length; i++) {
        style.fillColor("red");
        borders[i].display();
    }
    for (let i = 0; i < divisions.length; i++) {
        divisions[i].display();
    }
    ground.display();
    if (frameCount % 60 === 0) {
        particles.push(new Particle(calculator.rand(50, canvas.width - 50), 50));
    }
    for (let i = 0; i < particles.length; i++) {
        particles[i].display();
    }
}