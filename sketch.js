let mCamera;
let nSlider;

function preload() {
  mCamera = loadImage("./Piet.jpeg")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  mCamera.resize(0, height);

  mCamera.loadPixels();
  noLoop();

  nSlider = createSlider(1, 200, 1, 10);
  nSlider.position(600, 100);
}

function draw() {
  // Slider controls
  let nscale = nSlider.value();

  mCamera.loadPixels();
  background(220, 20, 120);
  for (let vi = 0; vi < mCamera.pixels.length; vi += 4){
    let redVal = mCamera.pixels[vi + 0];
    let greenVal = mCamera.pixels[vi + 1];
    let blueVal = mCamera.pixels[vi + 2];
    let alphaVal = mCamera.pixels[vi + 3];

    let maxVal = max(redVal, greenVal, blueVal);

  image(mCamera, (width - mCamera.width)/2, 0);
}


}