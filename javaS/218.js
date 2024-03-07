document.addEventListener("DOMContentLoaded", function() {
  // Get all the elements with the class "accordion-button"
  var acc = document.getElementsByClassName("accordion-button");
  var i;

  for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
          // Toggle between adding and removing the "active" class to highlight the button that controls the panel
          this.classList.toggle("active");

          // Select the next element sibling (which should be the .accordion-content div)
          var panel = this.nextElementSibling;

          // Toggle between hiding and showing the active panel
          if (panel.style.maxHeight) {
              // Panel is open, needs to be closed
              panel.style.maxHeight = null;
          } else {
              // Panel is closed, needs to be open
              // This opens the panel (using maxHeight can provide a smooth animation)
              panel.style.maxHeight = panel.scrollHeight + "px";
          } 
      });
  }
});
