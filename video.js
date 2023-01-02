// Resets each video of the slider to the beggining when slider nav buttons are clicked.
jQuery(document).ready(function (){
    var slider;
    if(jQuery('#video-slider').length) {

     slider = new Splide( '#video-slider' , {
        type: 'loop',
        perPage: 1,
        arrows: false,
        pagination: true,
        pauseOnHover: false, 
        //interval: 34000,
        speed: 600,
        //autoplay: true,
        rewind: true,
        pauseOnFocus: false,

        breakpoints: {
            500: {
                arrows: true,
            }
        }
        } ).mount();
    
    }

    slider.on('move', function (){
        const vid = document.getElementsByClassName('overview-video'); // selects the video elements
        for(let i = 0; i < vid.length; i++){
            vid[i].currentTime = 0;// each time a button is clicked it will for loop through each video and reset it to the start
        }
    });

    $("video.overview-video").on('ended', function (){
        slider.go('>');
    });

});




            


            
       
    
