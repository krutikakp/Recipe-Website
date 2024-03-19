document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior

      const target = this.getAttribute("data-target"); // Get the data-target attribute

      if (target === "recipe") {
        window.location.href = "recipe.html"; // Redirect to recipe.html
      } 
      else if(target === "blog"){
        window.location.href = "blog.html"; // Redirect to blog.html
        
      }
      else {
        window.location.href = "index.html";
        // Default action, e.g., for "Home" link
        // You can handle other cases as needed
      }
    });
  });
});

const testimonialCards = document.querySelectorAll(".testimonial-card");

let index = 0;
testimonialCards[index].classList.add("active"); // Show the first testimonial initially

// Function to display testimonials one by one with a delay
function displayTestimonials() {
  // Hide the current testimonial
  testimonialCards[index].classList.remove("active");
  // Move to the next testimonial
  index = (index + 1) % testimonialCards.length;
  // Show the next testimonial after a delay
  setTimeout(() => {
    testimonialCards[index].classList.add("active");
  }, 500); // Delay for 5 seconds
}

// Call the function to start displaying testimonials
setInterval(displayTestimonials, 6000); // Interval for switching between testimonials (5 seconds delay + 1 second animation)
document.addEventListener("DOMContentLoaded", function() {
    const specialGrids = document.querySelectorAll('.w3l-special-grid');
    
    specialGrids.forEach(grid => {
        const image = grid.querySelector('img');
        const info = grid.querySelector('.agileits-special-info');

        // Add click event listener to image
        image.addEventListener('click', function() {
            window.location.href = 'recipepg.html'; // Redirect to recipepg.html
        });

        // Add click event listener to info section
        info.addEventListener('click', function() {
            window.location.href = 'recipepg.html'; // Redirect to recipepg.html
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const circles = document.querySelectorAll('.circle img');
    
    circles.forEach(circle => {
        circle.addEventListener('click', function() {
            const altText = this.alt;
            if (altText === 'Image 1') {
                window.location.href = 'veg.html'; // Redirect to veg.html
            } else if (altText === 'Image 2') {
                window.location.href = 'nonv.html'; // Redirect to nonv.html
            } else if(altText === 'Image 3'){
                window.location.href = 'drink.html';
            }
            // You can add more conditions for other images if needed
        });
    });
});

