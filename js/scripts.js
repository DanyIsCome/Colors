jQuery( document ).ready(function() {

    //var myVideo=$("#videoMain");
    var myVideo = document.getElementById("videoMain"); 

    function play() { 
            myVideo.play(); 
    } 
    
    function pause() { 
            myVideo.pause(); 
    } 

    jQuery( "#mainCont" ).on('mouseenter',function() {
        play();  
    })
    jQuery( "#mainCont" ).on('mouseleave',function() {
        pause();  
    })
    
})