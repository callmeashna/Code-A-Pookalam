function setup() {
  createCanvas(windowWidth, windowHeight); 
  frameRate(30);
}

function draw() {
  background(205, 205, 255);
  translate(width / 2, height / 2);


  drawCircleLayer(250, color(255, 200, 0));
  drawCircleLayer(200, color(255, 100, 0));
  drawPetalLayer(150, 12);
  drawCircleLayer(100, color(0, 180, 0));
  drawPetalLayer(70, 8);
  drawCircleLayer(40, color(200, 0, 100));

  
  let numDiyas = 16;
  let r = 300;
  for (let i = 0; i < numDiyas; i++) {
    let angle = TWO_PI * i / numDiyas;
    let x = cos(angle) * r;
    let y = sin(angle) * r;

    push();
    translate(x, y);
    drawDiya(30, 45, angle);
    pop();
  }
}



function drawCircleLayer(radius, c) {
  fill(c);
  noStroke();
  ellipse(0, 0, radius * 2, radius * 2);
}

function drawPetalLayer(radius, count) {
  for (let i = 0; i < count; i++) {
    let angle = TWO_PI * i / count;
    push();
    rotate(angle);
    drawPetal(radius);
    pop();
  }
}

function drawPetal(radius) {
  let hues = [
    color(255, 215, 0),
    color(255, 140, 0),
    color(220, 20, 60)
  ];

  for (let i = 0; i < hues.length; i++) {
    fill(hues[i]);
    noStroke();
    beginShape();
    vertex(0, 0);
    bezierVertex(radius / 2, -radius / 3, radius, -radius / 3, radius, 0);
    bezierVertex(radius, radius / 3, radius / 2, radius / 3, 0, 0);
    endShape(CLOSE);
    radius -= 20;
  }
}

function drawDiya(w, h, angleToCenter) {
  push();
  rotate(angleToCenter + HALF_PI);

  fill(139, 69, 19);
  ellipse(0, 0, w, h);

  let flicker = random(0.85, 1.15);

  fill(255, 140, 0, 200);
  ellipse(0, -h / 2, (w / 2) * flicker, h * flicker);

  fill(255, 215, 0, 230);
  ellipse(0, -h / 2, (w / 3) * flicker, (h / 1.5) * flicker);

  fill(255, 255, 255, 180);
  ellipse(0, -h / 2, (w / 6) * flicker, (h / 3) * flicker);

  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}