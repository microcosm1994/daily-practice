$(function(){
    //创建一个空数组，后边用来接收城市首字母
    var citysLetter=[],data1,geohash;;

    $.ajax({
        url:"http://jklib.org/ele/cities.ashx",
        type:"get",
        data:{},
        datatype:"jsonp",
        success:function(info){
            console.log(info);
            //调用函数
            new city(info);

        }
    })
    //获取城市首字母函数封装
    function city(letter){
        this.letter=letter;
        this.init(letter);


    }
city.prototype={
    constructor:city,
    init:function(letter){
        //遍历请求回来的数据
        for(key in letter){
            //往空数组里添加城市首字母
            citysLetter.push(key);
            console.log(citysLetter);
        }
        //遍历数组
        for(var i=0;i<citysLetter.length;i++){
            var n=citysLetter[i];
           //调用渲染页面的函数
            this.renderselect1(n,0);
        }
        //调用点击事件
        //this.bidvdevents($("#select1"));
        this.bidvdevents($("#select1"));
        this.bidvdevents3($("#select2"));
        this.bidvdeventsLi($(".header-search-div"));
        console.log(this.optionValue);
        console.log(this.optionposition);
    },
    renderselect1:function(v,num){
        //动态创建结构
        var citys=`
            <option value="${v}">${v}</option>
               `;
        //var n=num;
        //把创建的结构添加到select里边
        $(".e-header select").eq(num).append(citys);
    },
    bidvdevents:function(e){
        var self=this;
        $(e).change(function(){
          var op=$(e).val();
            console.log(op);
            self.bidvdevents2(op);
        })
    },
    bidvdevents3:function(e){
        $(e).change(function(){
            var op=$(e).val();
            $("#p-position").html(op);
        })
    },
    bidvdeventsLi:function(e){
        var self=this;
        $(e).on("click",function(){
            console.log(self);
            console.log(this);
            var city=self.optionposition;
            $.ajax({
                url:'http://jklib.org/ele/restaurants.ashx?geohash=' + self.item.geohash + '&longitude=' + self.item.longitude + '&latitude=' + self.item.latitude,
                type:"get",
                data:{},
                datatype:"json",
                success:function(info){
                    for(var i=0;i<info.length;i++){
                        var src=info[i].image_path;
                        var name=info[i].name;
                        var iphone=info[i].phone;
                        var money=info[i].average_cost;
                        self.renderCommodity(src,name,iphone,money);
                    }
                    console.log(info);
                    console.log(self.item);
                }
            });
            $(".header-search-div").hide();
        })
    },
    optionValue:[],
    optionposition:[],
    item:{},
    bidvdevents2:function(e){
        var cityObj=this.letter[e];
        this.optionValue.push(e);
        console.log(e);
        console.log(cityObj);
        //var inputValue=$("#search").val();
        for(var i=0;i<cityObj.length;i++){
            var city1=cityObj[i];
            var c=cityObj[i].name;
            this.renderselect1(c,1);
        }
        geohash=geohashObj.encode(city1.latitude, city1.longitude);
        this.input($("#search"),geohash);

    },
    input:function(e,geohash){
        var self=this;

        e.keyup(function(){
            var inputValue=$("#search").val();
            console.log(inputValue);
            if(!inputValue) return;
            $.ajax({
                url:'http://jklib.org/ele/pois.ashx?geohash=' + geohash + '&keyword=' +inputValue,
                type:"get",
                data:{},
                datatype:"jsonp",
                success:function(data){
                    self.optionposition=[];
                    for(var i=0;i<data.length;i++){
                        var quyuData=data[i];
                        self.optionposition.push(quyuData);
                        self.renderLi();
                    }
                }
            });
            $(".header-search-div").show();
        })
    },
    renderLi:function(){
        var data=this.optionposition;
        console.log(this.optionposition);
        console.log(data.length);
        var li;
        for(var i=0;i<data.length;i++){
             li=`
             <ul>
                <li>${data[i].name}</li>
            </ul>
        `;
            $(".header-search-div").html(li);
            this.item.geohash=data[i].geohash;
            this.item.longitude=data[i].longitude;
            this.item.latitude=data[i].latitude;
        }
    },
    renderCommodity:function(src,name,iphone,money){
        //for(var i=0;i<info.length;i++){
            const commodity=`
<div class="commodity">
        <div class="commodity-img">
            <img src="${src}" alt=""/>
        </div>
        <div class="commodity-info">
            <h3><span></span>${name}</h3>
            <p><span></span>${iphone}</p>
            <p></p>
        </div>
        <div>
            <p></p>
            <p><span></span></p>
            <p><span></span>${money}</p>
        </div>
    </div>`;


            $(".e-commodity").append(commodity);

        //}

    }


}



});