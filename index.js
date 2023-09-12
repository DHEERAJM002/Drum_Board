var len=document.querySelectorAll(".drum").length;
for(var i=0;i<len;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        var btn=this.innerHTML;
        makeSound(btn);
        animationEffect(btn);
    });
}
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    animationEffect(event.key);
});
function makeSound(key){
    switch(key){
        case 'w':var audio=new Audio("sounds/crash.mp3");
        audio.play();
        break;
    case 'a':var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
    case 's':var audio=new Audio("sounds/snare.mp3");
        audio.play();
        break;
    case 'd':var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
    case 'j':var audio=new Audio("sounds/tom-2.mp3");
         audio.play();
         break;
    case 'k':var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
    case 'l':var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
    default:
        break;
    }
}
function animationEffect(element1){
    var btn=document.querySelector("."+element1);
    btn.classList.add("pressed");
   setTimeout(function(element1){ btn.classList.remove("pressed");},100);
   
}