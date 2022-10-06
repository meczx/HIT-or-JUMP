var char=document.getElementById("char");
var block=document.getElementById("block");
function jump(){
    if(char.classList!="animate"){
        char.classList.add("animate");
    }
    char.classList.add("animate");
    setInterval(function(){
        char.classList.remove("animate");
    },500);
}
var checkDead =setInterval(function(){
   var chartop= parseInt(window.getComputedStyle(char).getPropertyValue("top"));
   var blockLeft= parseInt(window.getComputedStyle(block).getPropertyValue("left"));
   if(blockLeft<20&&blockLeft>0 && chartop>=130){
      
       block.style.animation="none";
       block.style.animation="none";
       alert("loose");

   }
},10)