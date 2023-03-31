m = ""
m1 = ""
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
    loadSound("m.mp3", "m1.mp3")
}

function setup()
{
    canvas = createCanvas(600,500)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()

    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on('pose', gotPoses)
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function modelLoaded()
{
    console.log("Model has been Loaded")
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results)
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Value of leftWristX is = " + leftWristX)
        console.log("Value of leftWristY is = " + leftWristY)
        console.log("Value of rightWristX is = " + rightWristX)
        console.log("Value of rightWristY is = " + rightWristY)
    }
}