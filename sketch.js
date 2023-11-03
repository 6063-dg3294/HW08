let oCamera;
let mCamera;
let xCamera;
let nSlider;
let testWhite = false;

function preload() {
  oCamera = loadImage("./Piet.jpeg")
  xCamera = loadImage("./5.jpeg")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  oCamera.resize(0, height);

  oCamera.loadPixels();


  nSlider = createSlider(10, 200, 1, 10);
  nSlider.position(200, 100);

  mCamera = oCamera.get();
}

function draw() {
  // Slider controls
  // let nscale = nSlider.value();
  let nRed = nSlider.value();

  mCamera.loadPixels();
  xCamera.loadPixels();
  background(20, 20, 120);
  for (let vi = 0; vi < mCamera.pixels.length; vi += 4){
    let redVal = oCamera.pixels[vi + 0];
    let greenVal = oCamera.pixels[vi + 1];
    let blueVal = oCamera.pixels[vi + 2];
    let alphaVal = oCamera.pixels[vi + 3];

    let maxVal = max(redVal, greenVal, blueVal);
    let absRedGreen = abs(redVal - greenVal);
    let absGreenBlue = abs(greenVal - blueVal);
    let absWhite = abs(redVal + greenVal - blueVal);
  
    // if (absRedGreen < 10 && absGreenBlue < 10){
    //   testWhite = true

// Yellow value change
    // }
    if (absRedGreen < 90 && redVal > 200 && absRedGreen > 10 && absGreenBlue > 7){
      mCamera.pixels[vi + 0] = 120
    // Red value change
    } else if(maxVal == redVal && redVal > 80 && absRedGreen > 7 && absGreenBlue > 7){
      mCamera.pixels[vi + 0] = 120 + nRed;
      mCamera.pixels[vi + 1] = 50 + nRed;
      mCamera.pixels[vi + 2] = 50 + nRed;
    // Green value change
    // } else if(maxVal == greenVal && greenVal > 70 && absRedGreen > 10 && absGreenBlue > 10){
    //   mCamera.pixels[vi + 1] = 200;
    // Blue value change
    } else if (maxVal == blueVal && blueVal > 70 && absRedGreen > 10 && absGreenBlue > 10){
      mCamera.pixels[vi + 2] = 90 + nRed;
       
    } else {
      mCamera.pixels
    }
}

  mCamera.updatePixels();
  image(mCamera, (width - mCamera.width)/2, 0);
}


