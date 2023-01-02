document.addEventListener("DOMContentLoaded", function(event) { 
    function autoplay(width) {
        // let browser = navigator.userAgent;
        let video = document.getElementsByTagName("video");


        if (width.matches) { // If media query below 990px
            console.log("Below");
            console.log(video);
        
 
        } else { // if media query above 990px
            console.log("Above");
            for(let i = 0; i < video.length; i++){
                video[i].removeAttribute("controls");
                video[i].setAttribute("autoplay", "");
             }

             //however if safari then remove autoplay and add controls

        }
      }
      
      let width = window.matchMedia("(max-width: 990px)")
      autoplay(width) // Call listener function at run time
      width.addListener(autoplay) // Attach listener function on state changes
    });