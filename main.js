const button = document.querySelectorAll("button");
const detail = document.querySelector(".details-cont");
const profileImg = document.querySelector(".profile-img");
const profile = document.querySelector(".profile");

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.toggleAttribute("btn-focus");

    setTimeout(() => {
      btn.removeAttribute("btn-focus");
    }, 200);
  });
});

profile.addEventListener("click", () => {
  detail.toggleAttribute("visible");
  // profileImg.style.opacity = "0";
});
