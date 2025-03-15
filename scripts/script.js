function toggleMute() {

    var video=document.getElementById("myVideo");
  
    video.muted = !video.muted;
    document.getElementById("top-text").style.display=" none";
    document.getElementById("lastupdate").style.display=" none";
    document.getElementById("fentanyl").style.display=" block";
  
  }
