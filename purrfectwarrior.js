var darkmodecheckbox = document.getElementById("darkmodecheckbox");
var isDarkModeOn = false;

// Check if the user has previously set the dark mode
if (localStorage.getItem("isDarkModeOn") === "true") {
  isDarkModeOn = true;
  document.body.classList.add("darkmode");
  darkmodecheckbox.checked = true;
}

darkmodecheckbox.addEventListener("change", function () {
  isDarkModeOn = !isDarkModeOn;
  
  // Check if the dark mode is already on before applying the transition
  if (isDarkModeOn) {
    document.body.classList.toggle("darkmode");
  } else {
    document.body.classList.toggle("darkmode-with-transition");
    setTimeout(function () {
      document.body.classList.toggle("darkmode");
      document.body.classList.toggle("darkmode-with-transition");
    }, 300);
  }
  
  // Store the state of the dark mode in local storage
  localStorage.setItem("isDarkModeOn", isDarkModeOn);
});

window.addEventListener('resize', function() {
  // Code to execute when the window is resized
  if (window.innerWidth < 768) {
      // Adjust styles for small screens
  } else {
      // Adjust styles for larger screens
  }
});
function changeImage(element, newSrc) {
  element.querySelector('img').src = newSrc;
}

