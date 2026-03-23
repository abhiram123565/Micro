window.addEventListener("load", function () {
  const welcome = document.querySelector(".fade-in");
  const link = document.querySelector(".fade-in-delayed");

  // Show WELCOME first
  setTimeout(() => {
    welcome.style.transition = "all 0.8s ease";
    welcome.style.opacity = "1";
    welcome.style.transform = "translateY(0)";
  }, 200);

  // Show link after delay
  setTimeout(() => {
    link.style.transition = "all 0.8s ease";
    link.style.opacity = "1";
    link.style.transform = "translateY(0)";
  }, 800);
});
