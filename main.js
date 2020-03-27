//* The Idea
// Stopwatch
// Starts at 0
// press play to start the timer 
// you can pause the stopwatch timer and resume
// you can reset the stopwatch back to 0 




// Timer 
// placeholder input number 
// play to start the countdown
// you can pause and resume 
// you can clear/restart

  
// function handler() {

  //taking user input
  let time1 = document.getElementById('hms').value;
  //splitting it to seperate variables
  let pieces = time1.split(":");
  let hours = pieces[0];
  let minutes = pieces[1];
  let seconds = pieces[2];
  let time = {
      hours: hours * 1,
      minutes: minutes * 1,
      seconds: seconds * 1
  };

  let myInterval = 0;

  dl.addEventListener("click", function() { 

// Save the interval's handle to `timer`
let timer = setInterval(countdown, 1000);
  function countdown() {
      let container = document.getElementById('count');
      if (time.seconds > 0) {
          time.seconds--;
      } else {
          if (time.minutes > 0) {
              time.minutes--;
              time.seconds = 60;
          } else {
              time.minutes = 60;
              time.seconds = 60;
              time.hours--;
          }
      }

      if (time.hours >= 0) {
          container.innerHTML = time.hours + ':' + time.minutes + ':' + time.seconds;
      }
      else {
          container.innerHTML = 'Time over';
          clearInterval(timer);
      }

      if (document.getElementById('dl').value == 'start')
      {
          // Start the timer
          document.getElementById('sl').value = 'stop';
          timer = setInterval(countdown, 1000);
    } else {
        document.getElementById('dl').value = 'start';
        clearInterval(timer);
      }
  }
  
});

sl.addEventListener("click", function() {
    function myStopFunction() {
        clearInterval(myVar);
      } 
});

