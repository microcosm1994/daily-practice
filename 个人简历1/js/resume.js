$(function(){
    $('#dowebok').fullpage({
        sectionsColor:["rgba(0,0,0,0.6)","rgba(0,0,0,0.6)","rgba(0,0,0,0.6)","rgba(0,0,0,0.6)"],
        afterLoad:function(anchorLink,index){
            //console.log(index);
            //滚动到某一屏后，该做动画
            $('.section').removeClass('current');
            //解决第一屏加载时没动画效果 使用定时器
            setTimeout(function(){
                $('.section').eq(index-1).addClass('current');
            },100);
        }
    });






});