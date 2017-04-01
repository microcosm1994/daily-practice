/**
 * Created by 11365 on 2016/12/30.
 */
//�����ƶ���װ
//function animate(obj, target) {
//    clearInterval(obj.timer);
//    obj.timer = setInterval(function () {
//        var leader = obj.offsetLeft;
//        var step = 10;
//        step = target > leader ? step : -step;
//        if (Math.abs(leader - target) >= Math.abs(step)) {
//            leader = leader + step;
//            obj.style.left = leader + "px";
//        } else {
//            clearInterval(obj.timer);
//            obj.style.left = target + "px";
//        }
//    }, 15);
//}

//���嶯����װ
//function animate(obj, target) {
//    clearInterval(obj.timer);
//    obj.timer = setInterval(function () {
//        var leader = obj.offsetLeft;
//        var step = (target - leader) / 10;
//        step = step > 0 ? Math.ceil(step) : Math.floor(step);
//        leader = leader + step;
//        obj.style.left = leader + "px";
//        if (leader == target) {
//            clearInterval(obj.timer);
//        }
//    }, 15)
//}
//��������
function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        //用于判断动画是否结束
        var flag = true;
        //遍历传进来的json数据
        for (var k in json) {
            if (k === "opacity") {
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            //运行结束
            if (leader !== target) {
                flag = false;
            }
        }
        //动画运行时执行fn函数
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 15);
}
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}