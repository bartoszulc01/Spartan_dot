$(document).ready(function(){
    

$(window).scroll(function(){
    var sc=$(window).scrollTop();
    if(sc>100){
        $(".navbar").addClass("sticky");
    }
    else{
        $(".navbar").removeClass("sticky");
    }
        
    
    });
    $("#work").magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }
    })
});