const header = document.querySelector("#h2-skift");
const myHeaders = {
  "x-apikey": "613b480043cedb6d1f97ef66",
};

window.addEventListener("DOMContentLoaded", sidenVises);
let frugter;
let filter = "all";

function sidenVises() {
  console.log("sidenVises");
  document.querySelector("#menuknap").addEventListener("click", toggleMenu);
  const filterKnapper = document.querySelectorAll("nav button");
  filterKnapper.forEach((knap) =>
    knap.addEventListener("click", filterKategori)
  );
  loadJSON();
}

function filterKategori() {
  filter = this.dataset.kategori;
  document.querySelector(".valgt").classList.remove("valgt");
  this.classList.add("valgt");

  visFrugt();

  header.textContent = this.textContent;
}

async function loadJSON() {
  const JSONData = await fetch("https://theakea-4741.restdb.io/rest/frugter", {
    headers: myHeaders,
  });
  frugter = await JSONData.json();
  // console.log("frugter", frugter);
  visFrugt();
}

//funktion der viser personer i liste view
function visFrugt() {
  const dest = document.querySelector("#liste"); // container til articles med en person
  const skabelon = document.querySelector("template").content; // select indhold af html skabelon (article)
  dest.textContent = "";
  console.log(frugter);

  frugter.forEach((frugt) => {
    console.log(frugt._id);
    // loop igennem json (frugter)
    if (filter == frugt.type || filter == "all") {
      // console.log(frugt);
      const klon = skabelon.cloneNode(true);
      klon.querySelector(".navn").textContent = frugt.navn;
      klon.querySelector(".frugt-billede").src =
        "restdb_images/" + frugt.billedenavn + ".webp";

      //Kalder anonym funktion indeni click, der fører siden over til single view
      klon.querySelector("article").addEventListener("click", () => {
        location.href = "detail_single_view.html?id=" + frugt._id;
      });
      klon.querySelector("article").addEventListener("mouseover", () => {
        visHover(frugt.billedenavn);
      });
      klon.querySelector("article").addEventListener("mouseout", () => {
        fjernHover(frugt.billedenavn);
      });
      dest.appendChild(klon);
    }
  });
}

function visHover(img) {
  console.log(event.target);
  event.target.src = "restdb_images/" + img + "-2.webp";
  //event target betyder målet for den begivenhed JS laver
}

function fjernHover(img) {
  console.log(event.target);
  event.target.src = "restdb_images/" + img + ".webp";
  //event target betyder målet for den begivenhed JS laver
}
// //menubar, burgermenu
// function toggleMenu() {
//   console.log("toggleMenu");
//   document.querySelector("#menu").classList.toggle("hidden");

//   let erSkjult = document.querySelector("#menu").classList.contains("hidden");

//   if (erSkjult == true) {
//     document.querySelector("#menuknap").textContent = "☰";
//   } else {
//     document.querySelector("#menuknap").textContent = "X";
//   }
// }
