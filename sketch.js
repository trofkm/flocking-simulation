const flock = [];
let showAlignRadius = false;
function setup() {
  createCanvas(1800, 900);
  setupLayout();
  for (let i = 0; i < 100; i++) {
    flock.push(new Boid());
  }
}
function setupLayout(){
  let toggleAlignRadius = createCheckbox("Show Align Radius");
  toggleAlignRadius.mousePressed(() => {
    showAlignRadius = !showAlignRadius;
  });
}

function draw() {
  background(51);
  for (let boid of flock) {
    boid.show();
    boid.update();
    boid.flock(flock, showAlignRadius);
  }
}
