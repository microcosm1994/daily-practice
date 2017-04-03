function project(parent,data){
    var $parent=$(parent);
    this.data=data;

    this.init($parent);
};
project.prototype={
    constructor:project,
    init:function($parent){
        this.parentdom($parent);
        this.bivdevents();
    },
    parentdom:function($parent){

        var str="<div class='box'>" +
            "</div>";
        var $str=$(str);
        this.$container=$str;

        for(var i=0;i<this.data.length;i++){
            var data=this.data[i];
            var dataname=data.name;
            var datanum=data.num;
            this.addname(dataname,datanum);
        }
        console.log($parent);
        $parent.append($str);
    },
    bivdevents:function(){
        var self=this;
            $(".box").on("mouseenter","#spa",function(){

                console.log(this.parentNode);
                self.fade(this);
            }).on("mouseleave","#spa",function(){
                self.fadeout(this);
            })
    },
    addname:function(dataname,datanum){
        var str1="<div class='box-container'>" +
            "<img src=''/>" +
            "<h3>"+dataname+"</h3>" +
            "</br><span>♥"+datanum+"</span></br>" +
            "<p>天霸动霸TUA，6天前</p><span id='spa'>...</span>"+
            "<div class='mot'>" +
            "<p><span>ssss</span></p>" +
            "<p><span>ssss</span></p>" +
            "<p><span>ssss</span></p>" +
            "<p><span>ssss</span></p>" +
            "</div>" +
            "</div>";
        //console.log(this.$container);
        this.$container.append(str1);
    },
    fade:function(w){
        $(w).parent().find(".mot").fadeIn();
        $(w).parent().find("h3").css("color","green");
    },
    fadeout:function(s){
        $(s).parent().find(".mot").fadeOut();
        $(s).parent().find("h3").css("color","");
    }
}
