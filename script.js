// ✅ Button Click - Changes Text Color
document.getElementById("colorChangerBtn").addEventListener("click", function () {
    this.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.textContent = "Color Changed!";
  });
  
  // ✅ Hover effects are handled in CSS already
  
  // ✅ Keypress Detection
  document.getElementById("keypressInput").addEventListener("keypress", function (e) {
    console.log(`You pressed: ${e.key}`);
  });
  
  // ✅ Secret action - Double Click or Long Press
  let pressTimer;
  const secretBox = document.getElementById("secretBox");
  
  secretBox.addEventListener("dblclick", () => {
    alert("🤫 Secret unlocked with a double-click!");
  });
  
  secretBox.addEventListener("mousedown", () => {
    pressTimer = setTimeout(() => {
      alert("🤫 Secret unlocked with a long press!");
    }, 1000);
  });
  secretBox.addEventListener("mouseup", () => clearTimeout(pressTimer));
  secretBox.addEventListener("mouseleave", () => clearTimeout(pressTimer));
  
  // ✅ Image Gallery / Slideshow
  const galleryImage = document.getElementById("galleryImage");
  const images = [
    "pexels-designecologist-1779487.jpg", // Corrected extension
    "pexels-karoldach-331788.jpg",
    "pexels-nguyendesigner-244132.jpg",
  ];
  let imageIndex = 0;

  document.getElementById("nextImage").addEventListener("click", () => {
    imageIndex = (imageIndex + 1) % images.length; // This wraps back to 0 after last image
    document.getElementById("galleryImage").src = images[imageIndex];
  });

  galleryImage.onerror = () => {
    galleryImage.src = "default-image.jpg"; // Replace with a placeholder image
  };
  
  // ✅ Tabs / Accordion
  window.toggleTab = function(el) {
    const panel = el.nextElementSibling;
    const isVisible = panel.style.display === "block";
    document.querySelectorAll(".accordion .panel").forEach(p => p.style.display = "none");
    panel.style.display = isVisible ? "none" : "block";
  };
  
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from reloading the page
  
    // Optionally, you can validate the form here
  
    // Show the message
    document.getElementById("confirmationMessage").style.display = "block";
  
    // Optionally clear the form
    this.reset();
  
    // Hide the message after a few seconds (optional)
    setTimeout(() => {
      document.getElementById("confirmationMessage").style.display = "none";
    }, 3000);
  });
