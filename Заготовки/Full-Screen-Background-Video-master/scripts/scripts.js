

/******************************************************
		RESPONSEBAR
*******************************************************/

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/******************************************************
		VIDEOBACKGROUND
*******************************************************/

(function() {
  var video = document.getElementById("my-video");
  
  video.addEventListener( "canplay", function() {
    video.play();
  });
})();