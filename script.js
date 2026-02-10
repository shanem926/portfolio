/* script.js */

// The text you want to "type out"
const text = "Initializing Cyber Defense Sequence...";

// Speed in milliseconds (lower is faster)
const speed = 50; 

let i = 0;

function typeWriter() {
    // Look for the element with id="typewriter"
    const element = document.getElementById("typewriter");
    
    // Only run if the element exists (prevents errors on other pages)
    if (element && i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Start the function when the window loads
window.onload = typeWriter;