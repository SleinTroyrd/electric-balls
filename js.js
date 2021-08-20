var canvas = document.createElement("canvas");
var ctx = canvas.getContext('2d');

var w = canvas.width = innerWidth;
var h = canvas.height = innerHeight;

var canvasColor = `#232332`;
var x = w/2;
var y = h/2;
var stepCount = 0;
var direction;
var timer;
var myX;
var myY;
var maxLenght = 800;
var stepsLenght = 2;

function init() {
    canvas.style.background = canvasColor;
    document.querySelector('body').appendChild(canvas);
};

init();

function drawDot() {

    ctx.clearRect(0, 0, w, h);

    if (stepCount == 0){
        stepCount = 30;
        direction = Math.floor(8*Math.random());
    } else {
        stepCount--;
    };

    switch (direction) {
        case 0:
            y = y - 1;
            break;
        
        case 1:
            x = x + 1;
            break;
        
        case 2:
            y = y + 1;
            break;
            
        case 3:
            x = x - 1;
            break;

        case 4:
            x = x + 1;
            y = y - 1;
            break;
            
        case 5:
            x = x + 1;
            y = y + 1;
            break;
            
        case 6:
            x = x - 1;
            y = y + 1;
            break;
                
        case 7:
            x = x - 1;
            y = y - 1;
            break;
    };

    if (x < 0 || x > w || y < 0 || y > h) {
        stepCount = 0;
    };

    ctx.strokeStyle = "red";
    ctx.fillStyle = "white";
    ctx.lineWidth = "2";

    
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.arc(x, y, 30, 0, 2*Math.PI);
    ctx.stroke();
    ctx.closePath();

   

    function createLightning() {

        var dist = Math.sqrt(Math.pow(myX - x, 2) + Math.pow(myY - y, 2))
        var chance = dist / maxLenght;

        if (chance < Math.random())

        var stepsCount = dist / stepsLenght;
        var sx = x;
        var sy = y;

        let otherColor = chance * 255;
        ctx.beginPath();
        ctx.strokeStyle = `rgb(255, ${otherColor}, ${otherColor})`;
        ctx.moveTo(x, y)

        for(let i = stepsCount; i > 1; i--) {
             sx += (myX - sx) / i + Math.random()*(2/chance) -  Math.random()*(2/chance) ;
             sy += (myY - sy) / i + Math.random()*(2/chance) -  Math.random()*(2/chance) ;
            ctx.lineTo(sx, sy)
        };

        ctx.stroke();
        ctx.closePath();
     };
     
    createLightning();
    createLightning();

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.arc(myX, myY, 6, 0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(myX, myY, 30, 0, 2*Math.PI);
    ctx.closePath();
    ctx.stroke();

    timer = setTimeout(drawDot, 10);
};

drawDot();

canvas.onmousemove = function (e) {
    myX = e.offsetX;
    myY = e.offsetY; 
}