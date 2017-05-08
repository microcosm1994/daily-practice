$(function(){
$.ajax({
    url:"http://jklib.org/ele/cities.ashx",
    type:"get",
    data:{},
    datatype:"jsonp",
    success:function(info){
        console.log(info);
    }
})

})