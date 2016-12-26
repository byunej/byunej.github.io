$(function(){
  
    $('.code_open button').on('click',function(){
       
    $('.portfolio_01_coding').slideToggle();
        
    });
    
    $('#portfolio_01_coding').change(function(){
        
    var value = $("#portfolio_01_coding option:selected").val();
        console.log(value);
        
        switch(value){
                
            case "index_mob":
              $('.coding_content>div').hide();  
              $('.index_mob').show();
                break;
            case "index_tab":
              $('.coding_content>div').hide(); 
              $('.index_tab').show();
                break;
            case "index_pc":
              $('.coding_content>div').hide(); 
              $('.index_pc').show();
                break;
            case "main_menu":
              $('.coding_content>div').hide(); 
              $('.main_menu').show();
                break;
            case "best_new":
              $('.coding_content>div').hide(); 
              $('.best_new').show();
                break;
            case "colorfinder":
              $('.coding_content>div').hide(); 
              $('.colorfinder').show();
                break;
            
                
        }
                   
                   });
    
});