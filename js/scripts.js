jQuery(document).ready(function() {

    var videoWhite = document.getElementById("whiteVideo"); 
    var videoRed = document.getElementById("redVideo"); 
    var videoBlack = document.getElementById("blackVideo"); 
    var videoYellow = document.getElementById("yellowVideo");
    var playPauseButton = document.getElementById("playpause");
    
    function play(myVideo) { 
            myVideo.play(); 
    } 
    
    function pause(myVideo) { 
            myVideo.pause(); 
    } 
    
    function togglePlayPause(playpause,videoMain) {
        if (videoMain.paused || videoMain.ended) {
            playpause.title = "Pause";
            playpause.innerHTML = "Pause";
            videoMain.play();
   }
   else {
        playpause.title = "Play";
        playpause.innerHTML = "Play";
        videoMain.pause();
   }
    
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
//Logic for main video
    //Disable controls
    var video = document.getElementById("video_main");
    video.controls=false;
    
    jQuery( "#playpause" ).click(function(){
        togglePlayPause(playPauseButton, video);
    })
    
    function updateProgress() {
       var progress = document.getElementById("progress");
       var value = 0;
       if (video.currentTime > 0) {
          value = Math.floor((100 / video.duration) * video.currentTime);
       }
       progress.style.width = value + "%";
    }
    
    video.addEventListener("timeupdate", updateProgress, false);
    
})