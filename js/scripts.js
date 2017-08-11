jQuery( document ).ready(function() {

    //var myVideo=$("#videoMain");
    var videoWhite = document.getElementById("whiteVideo"); 
    var videoRed = document.getElementById("redVideo"); 
    var videoBlack = document.getElementById("blackVideo"); 
    var videoYellow = document.getElementById("yellowVideo"); 

    function play(myVideo) { 
            myVideo.play(); 
    } 
    
    function pause(myVideo) { 
            myVideo.pause(); 
    } 
//White
    jQuery( "#whiteCont" ).on('mouseenter',function() {
        play(videoWhite);  
    })
    jQuery( "#whiteCont" ).on('mouseleave',function() {
        pause(videoWhite);  
    })
//Red
    jQuery( "#redCont" ).on('mouseenter',function() {
        play(videoRed);  
    })
    jQuery( "#redCont" ).on('mouseleave',function() {
        pause(videoRed);  
    })
//Black
    jQuery( "#blackCont" ).on('mouseenter',function() {
        play(videoBlack);  
    })
    jQuery( "#blackCont" ).on('mouseleave',function() {
        pause(videoBlack);  
    })
//Yellow
    jQuery( "#yellowCont" ).on('mouseenter',function() {
        play(videoYellow);  
    })
    jQuery( "#yellowCont" ).on('mouseleave',function() {
        pause(videoYellow);  
    })
})