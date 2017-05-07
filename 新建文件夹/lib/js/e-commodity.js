$(function(){
    var arr=[
        {
            name:1
        },
        {
            name:2
        },
        {
            name:3
        },
        {
            name:4
        }
    ];
    for(var i=0;i<arr.length;i++){
        const commodity=`
<div class="commodity">
        <div>
            <img src="" alt=""/>
        </div>
        <div>
            <h3><span></span>${arr[i].name}</h3>
            <p><span></span></p>
            <p></p>
        </div>
        <div>
            <p></p>
            <p><span></span></p>
            <p><span></span></p>
        </div>
    </div>`;


        $(".e-commodity").append(commodity);

    }

})

