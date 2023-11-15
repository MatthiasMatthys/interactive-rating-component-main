var ratingValue = 0;  
function setupButtonClickHandler() {

    // Get all buttons
    const buttons = document.querySelectorAll('.btn-group button');
  
    // Add click event listener to each button
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove 'clicked' class from all buttons
        buttons.forEach(btn => btn.classList.remove('clicked'));

        // Add 'clicked' class to the clicked button
        this.classList.add('clicked');
        ratingValue = this.value;
      });
    });
  }

  function submit(){
    const element = document.getElementById('ratingdiv');
    const thanksElement = document.getElementById('thanksdiv');
    const spanElement = document.getElementById('ratingresult');
    if (element) {
        element.remove();
        spanElement.innerHTML = ratingValue;
        thanksElement.style.visibility = "visible";

    } else {
        console.log("Element with ID 'ratingdiv' not found");
    }
    
  }
  
  // Call the function when the DOM is loaded
  document.addEventListener('DOMContentLoaded', setupButtonClickHandler);