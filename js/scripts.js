jQuery( document ).ready(function() {

    //var myVideo=$("#videoMain");
    var myVideo = document.getElementById("whiteVideo"); 

    function play() { 
            myVideo.play(); 
    } 
    
    function pause() { 
            myVideo.pause(); 
    } 

    jQuery( "#whiteCont" ).on('mouseenter',function() {
        play();  
    })
    jQuery( "#whiteCont" ).on('mouseleave',function() {
        pause();  
    })
    
})