// //billeder portraet skift
// var w = window.innerWidth;
// console.log(w);
// if (w > 800) {
//   if (location.href == "thea.html") {
//     console.log(location);
//     document.querySelector(".portraet img").src = "pics/thea_desk.png";
//   }
// }

window.addEventListener("DOMContentLoaded", sidenVises);
let frugter;
const knap = document.querySelector("button");
let filter = "all";
knap.addEventListener("click", () => {
  location.href = "home.html";
});

function sidenVises() {
  console.log("sidenVises");
}
