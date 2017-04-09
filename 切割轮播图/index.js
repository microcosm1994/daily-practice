$(function(){
    var index=0;
    var flag=true;
    $(".l-btn").click(function(){
        if(!flag){
            return;
        }
        flag=false;
        index--;
        console.log(index);
        var deg=90*index;
        $("li").css("transform","rotateY("+deg+"deg)")
        //$("li").each(function(index,e){
        //    $(e).css("transform-delay",index*0.2+"s");
        //    console.log(e);
        //})
    });
    $(".r-btn").click(function(){
        if(!flag){
            return;
        }
        flag=false;
        index++;
        console.log(index);
        var deg=90*index;
        $("li").css("transform","rotateY("+deg+"deg)")
        $("li").each(function(index,e){
            $(e).css("transform-delay",index*0.2+"s");
        })
    });
    $('li').eq(1).on('webkitTransitionEnd',function(){
        flag=true;
    })

})