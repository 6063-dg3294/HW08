let mCamera;
let nSlider;
let testWhite = false;

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
    let absRedGreen = abs(redVal - greenVal);
    let absGreenBlue = abs(greenVal - blueVal);
    let absWhite = abs(redVal + greenVal - blueVal);
    // if (absRedGreen < 10 && absGreenBlue < 10){
    //   testWhite = true
    //   // Yellow value change
    // }
    if (absRedGreen < 60 && redVal > 200 && absRedGreen > 10 && absGreenBlue > 10){
      mCamera.pixels[vi + 0] = 100;
    // Red value change
    } else if(maxVal == redVal && redVal > 70 && absRedGreen > 10 && absGreenBlue > 10){
      mCamera.pixels[vi + 0] = 250;
    // Green value change
    } else if(maxVal == greenVal && greenVal > 70 && absRedGreen > 10 && absGreenBlue > 10){
      mCamera.pixels[vi + 1] = 250;
    // Blue value change
    } else if (maxVal == blueVal && blueVal > 70 && absRedGreen > 10 && absGreenBlue > 10){
      mCamera.pixels[vi + 2] = 255;
    } else {
      mCamera.pixels
    }
}

    

  mCamera.updatePixels();
  image(mCamera, (width - mCamera.width)/2, 0);
}


