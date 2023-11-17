document.addEventListener("DOMContentLoaded", (event) => {

});
  
const img = document.getElementById('image');
const imgDiv = document.getElementById('bg');

const cte = document.getElementById("centerme")
const bg = document.getElementById("bg")
const ani = document.getElementById("image")
const x = document.getElementById("x")

cte.onclick = function() {
    cte.style.transition = "opacity 0.5s ease-out";
    cte.style.opacity = 0;
    setTimeout(() => {
        ani.style.transition = "opacity 0.5s ease-out";
        ani.style.opacity = 0;
        setTimeout(() => {
            bg.style.transition = "opacity 0.5s ease-out";
            bg.style.opacity = 0;
            setTimeout(() => {
                bg.parentNode.removeChild(bg); // Remove the 'bg' element from the DOM
                x.style.display = "block"; // Add the 'x.display = block;' statement here
            }, 900); // Delay showing the element by 0.7 seconds (700 milliseconds)
        }, 350);
    }, 500);
};

