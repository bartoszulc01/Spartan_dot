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
   /*if($(".swiper-container").hasClass("team-member-slider")){
        var swiper = new Swiper('.swiper-container',{
            slidesPerView:3,
            allowTouchMove:true,
            loop:true,
            centeredSlides:true,
            slideToclickedslide:true,
            effect:"coverflow",
            grabcursor:true,
            autoplay:false,
            navigation:{
                nextEl:'.swiper-button-next',
                prevEl:'.swiper-button-prev',
            },
            coverflow:{
                rotate:0,
                stretch:100,
                depth:200,
                modifier:1,
                slideShadows:false
            },
            breakpoints:{
                767:{
                    slidesPerView:1,
                    centeredSlides:false,
                    effect:"slide",
                }
            }
        }); 
    } */
   
    $('.count').counterUp({
        delay:10,
        time:1000
    });
    
    $("#work").magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }
    });
});