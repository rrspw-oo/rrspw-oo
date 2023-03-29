// Get the modals
let modal = document.getElementById("myModal"),
  modals = document.getElementById("myModals"),
  proModal = document.getElementById("proModal");
// Get the buttons that open the modals
let btn = document.getElementById("myBtn"),
  btns = document.getElementById("myBtns"),
  probtn = document.getElementById("proBtn");

// Get the <span> elements that close the modals
var spans = document.querySelectorAll(".close");

// When the user clicks on the button, open the modal
btn.onclick = function () {
  openModal(modal);
};

btns.onclick = function () {
  openModal(modals);
};

// When the user clicks on <span> (x), close the modal
var closeBtns = document.querySelectorAll(".close");
closeBtns.forEach(function (closeBtn) {
  closeBtn.addEventListener("click", function () {
    closeModal(modal);
    closeModal(modals);
    closeModal(proModal);
  });
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal(modal);
  } else if (event.target == modals) {
    closeModal(modals);
  } else if (event.target == proModal) {
    closeModal(proModal);
  }
};

// Open the modal
function openModal(modal) {
  modal.style.display = "block";
}

// Close the modal
function closeModal(modal) {
  modal.style.display = "none";
}
