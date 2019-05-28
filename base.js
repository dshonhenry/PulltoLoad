
    function test() {
      anime({
        targets: '#ball',
        translateX: 5,
        loop: true,
      });
    }

    anime({
        targets: '#ball',
        keyframes:[  
            {translateX: 1},  
            {translateX: 2}, 
            {translateX: 1},  
            {translateX: 0},
            {translateX: -1},  
            {translateX: -2},
            {translateX: -1},  
            {translateX: 0},
        ],
        loop: true,
        easing: 'easeInOutSine'
      });
    var ball = document.getElementById("ball");
    window.addEventListener("mousedown", event => {
        if (event.button == 0) {
          window.addEventListener("mousemove", moved);
          event.preventDefault(); // Prevent selection
        }
      });
    
      function moved(event) {
        if (event.buttons == 0) {
          window.removeEventListener("mousemove", moved);
        } else {
            console.log("here");
          test();
        }
      }