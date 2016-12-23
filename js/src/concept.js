$(function(){
    var pf_01_concept_lnb = $('#portfolio_01 .concept_lnb');
    $('.click_after').attr('data-content','synopsis');
    pf_01_concept_lnb.find('li').on('click',function(){
       
        var li_index = $(this).index();
        console.log('li_index: '+li_index);
        $('#portfolio_01 .concept div').fadeOut();
        pf_01_concept_lnb.find('li').removeClass('click click_after');
        
        switch(li_index){
            case 0 :
                $(this).addClass('click click_after');
                $('.click_after').attr('data-content','synopsis');
                $('.portfolio_01_content_02').fadeIn();
                break;
            case 1 :
                $(this).addClass('click click_after');
                $('.click_after').attr('data-content','font_color');
               
                $('.portfolio_01_content_03').fadeIn();
                break;
            case 2 :
                $(this).addClass('click click_after');
                $('.click_after').attr('data-content','flowchart');
                $('.portfolio_01_content_04').fadeIn();
                break;
            case 3 :
                $(this).addClass('click click_after');
                $('.click_after').attr('data-content','sketch');
                $('.portfolio_01_content_05').fadeIn();
                break;
                
        }
        
    });
    
});