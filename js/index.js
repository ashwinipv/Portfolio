function fade() {
    $(".preloader").fadeOut("slow");
}
setTimeout(fade, 3000)



/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
/* function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 

function myFunction() {
  var x = document.getElementById("displayNav");
  if (x.style.display === "block") {
   x.style.display = "none";
 } else {
    x.style.display = "block";
 }
} */


function myFunction() {
  var x = document.getElementById("myid");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
