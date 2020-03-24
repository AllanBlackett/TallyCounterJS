let n = 0;
let body = document.querySelector('body');


//* When up arrow is clicked, increment by 1
//* When down arrow is clicked, decrement by 1
//* When spacebar is clicked, value of the counter resets back to zero

// Key press
body.onkeydown = function (e) {
  e.preventDefault();
  // arrow up
  if (e.keyCode == '38') {
    document.getElementById("countValue").innerHTML = ++n;
  }
  // arrow down
  else if (e.keyCode == '40') {
    document.getElementById("countValue").innerHTML = --n;
  }
  if (n <= 0) {
    document.getElementById("countValue").innerHTML = n = 0;
  }
  if (e.keyCode == '32') {
    document.getElementById("countValue").innerHTML = n = 0;
  }
};

//.............................................................

//* When the plus icon is clicked, increment by 1
//* When the minus icon is clicked, decrement by 1
//* When Reset button is clicked, value of the counter resets back to zero

// plus icon 
document.getElementById("plus").addEventListener("click", function () {
  document.getElementById("countValue").innerHTML = ++n;
});

// minus icon 
document.getElementById("minus").addEventListener("click", function () {
  document.getElementById("countValue").innerHTML = --n;
  // If count is 0, stop decrementing value
  if (n <= 0) {
    document.getElementById("countValue").innerHTML = n = 0;
  }
});

// Reset Button (resetButton clicked)
document.getElementById("resetButton").addEventListener("click", function () {
  document.getElementById("countValue").innerHTML = n = 0;
});
