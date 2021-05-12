song="";
scoreLeftWrist=0;
leftWristX=""
leftWristY="";
rightWristX="";
rightWristY="";
function preload(){
    song=loadSound("music.mp3");
}
function setup(){
    canvas=createCanvas(500, 500);
    canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw(){
    image(video, 0, 0, 500, 500);
    fill("#990000");
    stroke("#990000");
    if(scoreLeftWrist>0){

  
    circle(leftWristX, leftWristY, 25);
    leftWristYInNumber=Number(leftWristY);
    leftWristYnodecimals=floor(leftWristYInNumber);
    volume=leftWristYnodecimals/500;
    document.getElementById("volume").innerHTML="Volume="+volume;
}
}
function play(){
    song.play();
    song.setVolume(volume);
    song.rate(1);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        console.log("score left wrist="+scoreLeftWrist);
       
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("left wrist x =" +leftWristX +"left wrist y = " +leftWristY);
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("right wrist x =" +rightWristX +"right wrist y = " +rightWristY);
        

    }
}