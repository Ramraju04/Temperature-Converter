var celsiusi=document.querySelector("#celsius > input");
var Fahrenhiti=document.querySelector("#Fahrenhit>input");
var kelvini=document.querySelector("#kelvin>input");
var btn=document.querySelector("button");
celsius.addEventListener("input",function(){
var c=parseFloat(celsiusi.value);
var F=(c*(9/5)+32);
var k=c+(273.15);
Fahrenhiti.value=Math.round(F);
kelvini.value=Math.round(k);   
});
Fahrenhiti.addEventListener("input",function(){
   var F=parseFloat(Fahrenhiti.value);
   var C=(F-32)*(5/9);
   var k=(F-32)*(5/9)+273.15;
   celsiusi.value=Math.round(C);
   kelvini.value=Math.round(k);   
   });
   kelvini.addEventListener("input",function(){
      var K=parseFloat(kelvini.value);
      var C=K-273.15;
      var F=(K-273.15)*(9/5)+32;
      celsiusi.value=Math.round(C);
      Fahrenhiti.value=Math.round(F);   
      });
      btn.addEventListener("click",function(){
         celsiusi.value=" ";
         Fahrenhiti.value=" "; 
         kelvini.value=" ";
      });
