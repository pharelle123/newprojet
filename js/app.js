document.addEventListener("DOMContentLoaded", () => {
  console.log("chargé");

  const elTitre = document.querySelectorAll("titre, h1");
  elTitre.forEach(el => el.innerText = "Développeur PHP");
});
// const table=["mama","papa"]
// console.table(typeof table)
// let chiffre = 9
// chiffre%2 == 0 ? console.log("pair") : console.log("impair")