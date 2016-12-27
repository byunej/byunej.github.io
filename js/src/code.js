$(function(){
  
    $('.code_open_01 button').on('click',function(){
       
    $('.portfolio_01_coding').slideToggle();
        
    });
    
    $('#portfolio_01_coding').on('change',function(){
        
    var value = $("#portfolio_01_coding option:selected").val();
        
        console.log(value);
        
        switch(value){
                
            case "index_mob":
              $('.portfolio_01_coding .coding_content>div').hide();  
              $('.index_mob').show();
                break;
            case "index_tab":
              $('.portfolio_01_coding .coding_content>div').hide(); 
              $('.index_tab').show();
                break;
            case "index_pc":
              $('.portfolio_01_coding .coding_content>div').hide(); 
              $('.index_pc').show();
                break;
            case "main_menu":
              $('.portfolio_01_coding .coding_content>div').hide(); 
              $('.main_menu').show();
                break;
            case "best_new":
              $('.portfolio_01_coding .coding_content>div').hide(); 
              $('.best_new').show();
                break;
            case "colorfinder":
              $('.portfolio_01_coding .coding_content>div').hide(); 
              $('.colorfinder').show();
                break;
        }
                   
                   });
    
    $('.code_open_02 button').on('click',function(){
       
    $('.portfolio_02_coding').slideToggle();
        
    });
    
    $('#portfolio_02_coding').on('change',function(){
        
    var value = $("#portfolio_02_coding option:selected").val();
        
        console.log(value);
        
        switch(value){
                
            case "product":
              $('.portfolio_02_coding .coding_content>div').hide();  
              $('.product').show();
                break;
            case "electronic":
              $('.portfolio_02_coding .coding_content>div').hide(); 
              $('.electronic').show();
                break;
            case "contact":
              $('.portfolio_02_coding .coding_content>div').hide(); 
              $('.contact').show();
                break;
            case "video":
              $('.portfolio_02_coding .coding_content>div').hide(); 
              $('.video').show();
                break;
            
        }
                   
                   });
    
});