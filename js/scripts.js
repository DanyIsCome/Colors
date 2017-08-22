jQuery(document).ready(function() {
    //4 videos
    var videoWhite = document.getElementById("whiteVideo"); 
    var videoRed = document.getElementById("redVideo"); 
    var videoBlack = document.getElementById("blackVideo"); 
    var videoYellow = document.getElementById("yellowVideo");
    //video main
    var playPauseButton = document.getElementById("playpause");
    var playIcon = document.getElementById("playIcon");
    var muteIcon = document.getElementById("muteIcon");
    var video = document.getElementById("video_main");
    var videoend=false;
    video.controls=false;
    
    video.onended = function(e) {
        playIcon.src="images/icons/play_small.png";
    };
    
    function moveButton(){
        playPauseButton.style.bottom='16px';
        playPauseButton.style.left='0px';
    }
    
    function play(myVideo) { 
        myVideo.play(); 
    } 
    
    function pause(myVideo) { 
        myVideo.pause(); 
    } 
    
    function togglePlayPause() {
        if (video.paused || videoend) {
        playIcon.src="images/icons/pause.png";
        video.play();
    }
        else {
        playIcon.src="images/icons/play_small.png";
        video.pause();
        }
    }  
    
    function updateProgress() {
        var progress = document.getElementById("progress");
        var value = 0;
        if (video.currentTime > 0) {
        value = Math.floor((100 / video.duration) * video.currentTime);
       }
       progress.style.width = value + "%";
    }
    
    function toggleMute() {
        if(video.muted){
            video.muted=false;
            muteIcon.src="images/icons/audio.png";
        }else{
            video.muted = true;
            muteIcon.src="images/icons/mute.png";
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
    
    jQuery( "#playpause" ).click(function(){
        togglePlayPause();
        moveButton();
    })
    
    video.addEventListener("timeupdate", updateProgress, false); 
    
     jQuery( "#mute" ).click(function(){
        toggleMute();
    })
    
})