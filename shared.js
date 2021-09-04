// alert("This is working");

var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var planbutton = document.querySelectorAll(".plan button");
var backdropCancel = document.querySelector(".modal button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

for (var i = 0; i < planbutton.length; i++) {
  planbutton[i].addEventListener("click", function () {
    backdrop.classList.add("open");
    modal.classList.add("open");

    // backdrop.style.display = "block";
    // modal.style.display = "block";
  });
}

function closeModal() {
  backdrop.classList.remove("open");
  if (modal) {
    modal.classList.remove("open");
  }
  // backdrop.style.display = "none";
  // modal.style.display = "none";
}

if (backdropCancel) {
  backdropCancel.addEventListener("click", closeModal);
}
backdrop.addEventListener("click", function () {
  closeModal();

  mobileNav.classList.remove("open");
  // backdrop.style.display = "none";
  // mobileNav.style.display = "none";
});

toggleButton.addEventListener("click", function () {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
  // mobileNav.style.display = "block";
  // backdrop.style.display = "block";
});
