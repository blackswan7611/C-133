img = "";
status1 = "";
objects = [];

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function setup()
{
    canvas = createCanvas(640 , 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";
}

function draw()
{
    image(img, 0, 0, 640, 420);

    if(status1 != "")
    {
        for(i = 0; i < objects.length; i++)
        {
            fill('#9932cc');
            text(objects[i].label + " " + floor(objects[i].confidence * 100) + "%",  objects[i].x + 15, objects[i].y - 10 );
            noFill();
            stroke('#9932cc');
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height); 

        }

    }
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status1 = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
        objects = results;
    }
}