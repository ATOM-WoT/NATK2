const buttonElem = document.getElementById('first');
 
let onButtonClick = function() {
 document.getElementById("link_text").setAttribute("style", "opacity:1; transition: 0.5s; height: 100%; dispaly:block;");
    
    
     
    setTimeout(function(){
    document.getElementById('link_text').style.opacity = '0';
  }, 5000);
}

buttonElem.addEventListener('click', onButtonClick);  


    
    function about_people() {
    
        document.getElementById("link_text2").setAttribute("style", "opacity:1; transition: 0.5s; height: 100%; dispaly:block;");
        
       
         
        setTimeout(function(){
        document.getElementById('link_text2').style.opacity = '0';
      }, 5000);
        }
       
        function gallery() {
    
          document.getElementById("link_text3").setAttribute("style", "opacity:1; transition: 0.5s; height: 100%; dispaly:block;");
          
       
           
          setTimeout(function(){
          document.getElementById('link_text3').style.opacity = '0';
        }, 5000);
          }
         
 

