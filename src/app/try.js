var a = 1;  
(function(a){
    return (function(){
     console.log(a);
     a = 6;
    })()
   })(21);