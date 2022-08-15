noseX = 0;
noseY = 0;
rightWristX = 0;
leftWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500,480);
   
    canvas = createCanvas(500,480);
    canvas.position(600,140);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet has been initialized");
}

function gotPoses(results){
    if(results.length>0){
         console.log(results);
         rightWristX = results[0].poses.rightWrist.X;
         leftWristX = results[0].poses.lefttWrist.X;
         difference = floor(leftWristX-rightWristX);
    }
}

function draw(){
    background("#46fb67");
    textSize(difference);
    fill("red");
    text("Jayden",20,20);
}