$(function(){
    
    var ww = $(window).width();
    var resume = $('#resume').offset();
    var portfolio_01 = $('#portfolio_01').offset();
    var portfolio_02 = $('#portfolio_02').offset();
    var identity = $('#identity').offset();
        
    $('.resume').find('a').on('click',function(e){
        
        e.preventDefault();
		$('.scroll_box').animate({scrollTop:resume.top},800);
       
        
    });
   $('.portfolio_01>div').eq(0).find('a').on('click',function(e){
        
        e.preventDefault();
		$('.scroll_box').animate({scrollTop:portfolio_01.top},800);
       
    });
   $('.portfolio_02>div').eq(0).find('a').on('click',function(e){
        
        e.preventDefault();
		$('.scroll_box').animate({scrollTop:portfolio_02.top},800);
      
    });
   $('.identity').find('a').on('click',function(e){
        
        e.preventDefault();
		$('.scroll_box').animate({scrollTop:identity.top},800);
       
    });


$('.scroll_box').on('scroll',function(e){
    var wh = $(window).height();
    var scroll = $(this).scrollTop();
        
    if(scroll>wh){
        $('header').fadeIn();
    }else{
        $('header').fadeOut();
    }
});
    
var wh = $(window).height();
var scroll = $(this).scrollTop();
    if(scroll>wh){
        $('header').fadeIn();
    }else{
        $('header').fadeOut();
    }

/*메뉴버튼 클릭*/    
$('.menu_button button').on('click',function(e){
    e.preventDefault();
    $('.menu').toggleClass('hide');
    $('.menu_button i').toggleClass("fff");
    $('.menu_button i').toggleClass("flaticon-menu");
    $('.menu_button i').toggleClass("flaticon-cross");

    });
/*resume 클릭*/
    
 $('.menu li').on('click',function(e){
        e.preventDefault();
        $('.menu').addClass('hide');
        $('.menu_button i').removeClass("fff");
        $('.menu_button i').addClass("flaticon-menu");
        $('.menu_button i').removeClass("flaticon-cross");
     
     var text = $(this).text();
     
     console.log(text);
     
     switch (text){
         case 'Resume':
             $('.scroll_box').animate({scrollTop:resume.top},800);
             break;
     case 'Portfolio#1':
              $('.scroll_box').animate({scrollTop:portfolio_01.top},800)
             break;
     case 'Portfolio#2':
              $('.scroll_box').animate({scrollTop:portfolio_02.top},800);
             break;
     case 'Identity':
             $('.scroll_box').animate({scrollTop:identity.top},800);
             break;
     
     }
      
      

    });   
    
});