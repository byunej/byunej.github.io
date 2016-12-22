$(function(){
    
    var ww = $(window).width();
    var resume = $('#resume').offset();
    var portfolio_01 = $('#portfolio_01').offset();
    var portfolio_02 = $('#portfolio_02').offset();
    var identity = $('#identity').offset();
        
    $('.resume').find('a').on('click',function(e){
        
        e.preventDefault();
		$('.scroll_box').animate({scrollTop:resume.top},800);
        console.log(resume);
        
    });
   $('.portfolio_01>div').eq(0).find('a').on('click',function(e){
        
        e.preventDefault();
		$('.scroll_box').animate({scrollTop:portfolio_01.top},800);
        console.log(resume);
    });
   $('.portfolio_02>div').eq(0).find('a').on('click',function(e){
        
        e.preventDefault();
		$('.scroll_box').animate({scrollTop:portfolio_02.top},800);
        console.log(resume);
    });
   $('.identity').find('a').on('click',function(e){
        
        e.preventDefault();
		$('.scroll_box').animate({scrollTop:identity.top},800);
        console.log(resume);
    });
   
$('#main>.logo ~ div').on('click',function(e){
    var header = $('header').fadeIn();
});
    
});