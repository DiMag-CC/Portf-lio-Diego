document.addEventListener("DOMContentLoaded", () => {
 const toggle = document.getElementById("toggle");
 const nav = document.querySelector(".nav");
 if (toggle && nav) {
 toggle.addEventListener("click", () => {
 nav.classList.toggle("show");
 const isExpanded = nav.classList.contains("show");
 toggle.setAttribute("aria-expanded", isExpanded);
 });
 }
 document.addEventListener("click", (event) => {
 if (nav && nav.classList.contains("show") && !nav.contains(event.target) && !toggle.contains(event.target)) {
 nav.classList.remove("show");
 toggle.setAttribute("aria-expanded", "false");
 }
 });
});
