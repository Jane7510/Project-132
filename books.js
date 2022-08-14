status = "";

function preload() {
    createImage("https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg");
}

function setup() {
    canvas = createCanvas(600, 600);
    canvas.position(550, 350);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
   
}

function start()
{
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  
}

function modelLoaded() {
    status = "true";
    console.log("Model Loaded!");
}