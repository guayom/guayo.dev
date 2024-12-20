const menuItems = document.querySelectorAll("nav#main-nav ul li a");
menuItems.forEach((item) => {
  item.addEventListener("click", async (e) => {
    if (document.startViewTransition) {
      e.preventDefault();
      console.log("Transition started.");
      const mainElement = document.querySelector("main");
      mainElement.classList.remove("fade-in");
      mainElement.classList.add("fade-out");
      const activeItem = document.querySelector(".active");
      if (activeItem) {
        activeItem.classList.add("leaving");
        activeItem.classList.remove("active");
        item.classList.add("entering");
      }
      const transition = document.startViewTransition(() => {
        console.log("startViewTransition callback.");
        window.location.href = item.href;
      });
      await transition.finished;
      console.log("startViewTransition finished.");
    } else {
      console.log("startViewTransition is not supported.");
      window.location.href = item.href;
    }
  });
});
window.addEventListener("DOMContentLoaded", (event) => {
  const mainElement = document.querySelector("main");
  mainElement.classList.add("fade-in");
  mainElement.addEventListener("animationend", () => {
    mainElement.classList.remove("fade-in");
  });
});
