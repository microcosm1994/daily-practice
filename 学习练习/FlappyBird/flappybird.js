var birdElement = document.getElementById("bird");
var game = document.getElementById("game");
var gameover = false;
var g = 1;
var i = 0;
var timer=null;
var bird = {
    x: birdElement.offsetLeft,
    y: birdElement.offsetTop,
    speedX: 5,
    speedY: 0,
    entity: birdElement
};
var sky = {
    x: 0
};

//var timer=setInterval(function(){
//    birdElement.style.backgroundPositionX=-52*i+"px";
//    i++;
//    if(i===3){
//        i=0;
//    }
//},100);

setInterval(function () {
    if (!gameover) {
        sky.x = sky.x - bird.speedX;
        game.style.backgroundPositionX = sky.x + "px";
        //小鸟起飞
        bird.speedY = bird.speedY + g;
        var step = bird.speedY;
        bird.y = bird.y + step;
        //碰撞检测
        var overY = game.offsetHeight - birdElement.offsetHeight;
        if (bird.y > overY) {
            bird.y = overY;
            stop();
        }
        if (bird.y < 0) {
            bird.y = 0;
            stop();
        }
        bird.entity.style.top = bird.y + "px";
    }
}, 25);
document.onkeyup = function (e) {
    if (e.keyCode === 38) {
        bird.speedY = -10;
    }
}
//创建管子
function Pipe(positonX) {
    this.x = positonX;
    this.upPipeY = 0;
    this.width = 52;
    this.upPipeH = parseInt(Math.random() * 175 + 100);
    this.downPipeY = this.upPipeH + 200;
    this.downPipeH = game.offsetHeight - this.downPipeY;
    var divUp = document.createElement("div");
    divUp.className = "pipeU";
    divUp.style.width = this.width + "px";
    divUp.style.height = this.upPipeH + "px";
    divUp.style.left = this.x + "px";
    divUp.style.top = this.upPipeY + "px";
    game.appendChild(divUp);
    var divDown = document.createElement("div");
    divDown.className = "pipeD";
    divDown.style.width = this.width + "px";
    divDown.style.height = this.downPipeH + "px";
    divDown.style.left = this.x + "px";
    divDown.style.top = this.downPipeY + "px";
    game.appendChild(divDown);
    var that = this;
    //移动管子
    this.timer=setInterval(function () {
        that.x = that.x - 1;
        if (that.x < -52) {
            that.x = 800;
        }
        if (!gameover) {
            divUp.style.left = that.x + "px";
            divDown.style.left = that.x + "px";
        }
        var downCrash = (bird.x + 34 > that.x) && (bird.x < that.x + 52) && (bird.y + 25 > that.downPipeY);
        var upCrash = (bird.x + 34 > that.x) && (bird.x < that.x + 52) && (bird.y < that.upPipeH);
        if (downCrash || upCrash) {
            //gameover = true;
            stop();
        }
    }, 10);
}
var arr=[];
for (var i = 0; i < 4; i++) {
    arr[i]=new Pipe(i * 200 + 400);
}
function stop(){
    gameover=true;
    clearInterval(timer);
    for(var i=0;i<arr.length;i++){
        clearInterval(arr[i].timer);
    }
}




