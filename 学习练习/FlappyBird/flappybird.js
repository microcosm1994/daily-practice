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
    //游戏没有结束的时候运行代码
    if (!gameover) {
        //整个游戏背景x轴移动的距离
        sky.x = sky.x - bird.speedX;
        game.style.backgroundPositionX = sky.x + "px";
        //小鸟下落时y轴的坐标
        bird.speedY = bird.speedY + g;
        //设置一个变量用来接收小鸟下落时y轴的坐标，用来设置小鸟下降时的速度
        var step = bird.speedY;
        bird.y = bird.y + step;
        //用一个变量来设定小鸟下落的最低高度，用来 判断游戏是否结束
        var overY = game.offsetHeight - birdElement.offsetHeight;
        //小鸟的y轴坐标大于最低高度，所以游戏停止
        if (bird.y > overY) {
            bird.y = overY;
            stop();
        }
        //小鸟的y轴坐标小于0，说明碰到顶部边框，所以游戏结束
        if (bird.y < 0) {
            bird.y = 0;
            stop();
        }
        //设置游戏开始时小鸟出现的位置
        bird.entity.style.top = bird.y + "px";
    }
}, 25);
//添加键盘事件，实现键盘上下键控制小鸟
document.onkeyup = function (e) {
    if (e.keyCode === 38) {
        bird.speedY = -10;
    }
}

function Pipe(positonX) {
    //管子的坐标
    this.x = positonX;
    this.upPipeY = 0;
    this.width = 52;
    this.upPipeH = parseInt(Math.random() * 175 + 100);
    this.downPipeY = this.upPipeH + 200;
    this.downPipeH = game.offsetHeight - this.downPipeY;
    // 动态添加管子
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
    //因为定时器会混乱this的指向问题，所以提前保存this的指向，这里的this指向调用该方法的实例
    var that = this;
    // 设置定时器让管子向后移动
    this.timer=setInterval(function () {
        that.x = that.x - 1;
        //简单实现管子无缝滚动
        if (that.x < -52) {
            that.x = 800;
        }
        if (!gameover) {
            divUp.style.left = that.x + "px";
            divDown.style.left = that.x + "px";
        }
        // 设置变量，进行游戏碰撞检测，并停止游戏
        var downCrash = (bird.x + 34 > that.x) && (bird.x < that.x + 52) && (bird.y + 25 > that.downPipeY);
        var upCrash = (bird.x + 34 > that.x) && (bird.x < that.x + 52) && (bird.y < that.upPipeH);
        if (downCrash || upCrash) {
            //gameover = true;
            stop();
        }
    }, 10);
}
//执行上面的函数方法
var arr=[];
for (var i = 0; i < 4; i++) {
    arr[i]=new Pipe(i * 200 + 400);
}
//封装一个用来停止游戏的方法，
function stop(){
    gameover=true;
    clearInterval(timer);
    for(var i=0;i<arr.length;i++){
        clearInterval(arr[i].timer);
    }
}




