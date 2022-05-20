nose_x = 0;
nose_y = 0;

function preload(){
    clown_img = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup(){
    canvas = createCanvas(450,450);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450,450);
    video.hide();
    posenet = ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}
function modelloaded(){
    console.log("Pose Net is initialised");
}
function draw(){
    image(video,0,0,450,450);
   image(clown_img,nose_x,nose_y,50,50);
}
function take_snapshot(){
    save("clown-nosed-image.png")
}
function gotposes(results){
    if(results.length > 0 ){
        console.log(results);
        nose_x = results[0].pose.nose.x - 20;
        nose_y = results[0].pose.nose.y - 20;
        console.log("nose x is"+results[0].pose.nose.x);
        console.log("nose y is"+results[0].pose.nose.y);
    }
}