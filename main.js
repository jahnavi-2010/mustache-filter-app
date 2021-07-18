function preload()
{

}
function setup()
{
    canvas=createCanvas(350,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(350,350);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotposes);
}
function modelLoaded()
{
    console.log("posenet is started");
}
function gotposes(results)
{
if(results.length>0)
{
    console.log(results);
    console.log("nose x ="+results[0].pose.nose.x);
    console.log("nose y ="+results[0].pose.nose.y);
}
}
function draw()
{
image(video,0,0,350,350);
}
function take_pic()
{
    save('filteredimage.png');
}