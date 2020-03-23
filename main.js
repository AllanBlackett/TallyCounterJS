// When the plus icon is clicked, increment by 1
// When the minus icon is clicked, decrement by 1
// When Reset button is clicked, value of the counter back to zero

//.........................................

let n = 0;

// Increment
document.getElementById("plus").addEventListener("click", function(){
  document.getElementById("countValue").innerHTML = ++n;
}); 

// Decrement
document.getElementById("minus").addEventListener("click", function(){
  document.getElementById("countValue").innerHTML = --n;
  // If count is 0, stop decrementing value
  if (n <= 0) {
    document.getElementById("countValue").innerHTML = n = 0;
  }
}); 

// Reset Button
document.getElementById("resetButton").addEventListener("click", function(){
  document.getElementById("countValue").innerHTML = n = 0;
});