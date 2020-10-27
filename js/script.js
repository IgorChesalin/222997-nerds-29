// Открытие и закрытие окна
var link = document.querySelector(".contacts-button");
var popup = document.querySelector(".modal-content");
var closelink = document.querySelector(".close-bnt");

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
});

closelink.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
});




// var popup = document.querySelector(".modal-content");