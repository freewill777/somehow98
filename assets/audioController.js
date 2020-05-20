      var x = document.getElementById("channel-one"); 
      var y = document.getElementById("channel-two");
      var z = document.getElementById("channel-three");

      var btnn1 = document.getElementById("btn1");
      var btnn2 = document.getElementById("btn2");
      var btnn3 = document.getElementById("btn3");
        
      function initClr1(){
         console.log('sal');
         btnn1.classList.add("redd");
         btnn2.classList.remove("redd");
         btnn3.classList.remove("redd");
      }
      function initClr2(){
         console.log('sal');
         btnn1.classList.remove("redd");
         btnn2.classList.add("redd");
         btnn3.classList.remove("redd");
      }
      function initClr3(){
         console.log('sal');
         btnn1.classList.remove("redd");
         btnn2.classList.remove("redd");
         btnn3.classList.add("redd");
      }
      function initClr4(){
         console.clear();
         btnn1.classList.remove("redd");
         btnn2.classList.remove("redd");
         btnn3.classList.remove("redd");
      }
      function playOne() { 
         x.play(); 
         y.pause();
         z.pause();
      } 
      function playTwo() { 
         x.pause(); 
         y.play();
         z.pause();
      } 
      function playThree() { 
         x.pause(); 
         y.pause();
         z.play();
      } 
      function pauseAudio() { 
         x.pause(); 
         y.pause();
         z.pause();
         console.clear();
      } 