const icon = document.getElementById("secret-icon");

// Move the icon to a random position
function moveIcon() {
    const x = Math.random() * (window.innerWidth - 50);
    const y = Math.random() * (window.innerHeight - 50);

    icon.style.left = x + "px";
    icon.style.top = y + "px";
}

// Move it every 2 seconds
setInterval(moveIcon, 2000);

// Initial position
moveIcon();

icon.style.display = "none";

setTimeout(() => {
    icon.style.display = "block";
}, 5000);


// Click = go to hidden page
icon.addEventListener("click", () => {
    window.location.href = "amia.html";
});