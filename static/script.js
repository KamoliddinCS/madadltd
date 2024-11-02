$(document).ready(function() {
  // Function to handle scroll event
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    // Add 'scrolled' class to the header when scrolling down
    if (scroll > 0) {
      $(".b-border").addClass("scrolled");
    } else {
      $(".b-border").removeClass("scrolled");
    }
  });
});

const mainLabel = document.querySelectorAll('.main-label .fade-up');
let delay1 = 0;

const observer1 = new IntersectionObserver((entries, observer1) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible-up');
            }, delay1);
            delay1 += 300;
            observer1.unobserve(entry.target);
        }
    });
}, { threshold: 0.6 });

mainLabel.forEach(item => observer1.observe(item));


const items = document.querySelectorAll('.fade-left');
let baseDelay = 300; // Base delay between animations
let delayIncrement = 300; // Incremental delay for each item in sequence

const observer = new IntersectionObserver((entries) => {
    let delay = 0; // Reset delay for each set of entries in view

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Apply a staggered delay to each item in sequence
            setTimeout(() => {
                entry.target.classList.add('fade-in-left');
            }, delay);
            delay += delayIncrement; // Increase delay for each element in sequence
        } else {
            // Remove the 'visible' class when scrolling out of view
            entry.target.classList.remove('fade-in-left');
        }
    });
}, { threshold: 0.6 });

// Observe each item
items.forEach(item => observer.observe(item));


const fadeUpItems = document.querySelectorAll('.product-section-text .fade-up');
const observer2 = new IntersectionObserver((entries) => {
    let delay = 0; // Reset delay for each set of entries in view

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Apply a staggered delay to each item in sequence
            setTimeout(() => {
                entry.target.classList.add('visible-up');
            }, delay);
            delay += delayIncrement; // Increase delay for each element in sequence
        } else {
            // Remove the 'visible' class when scrolling out of view
            entry.target.classList.remove('visible-up');
        }
    });
}, { threshold: 0.6 });

// Observe each item
fadeUpItems.forEach(item => observer2.observe(item));

