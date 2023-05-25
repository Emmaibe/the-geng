const button = document.querySelectorAll("button");
const details = document.querySelectorAll(".details-cont");
const profileImg = document.querySelectorAll(".profile-img");
const profile = document.querySelectorAll(".profile");

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.toggleAttribute("btn-focus");

    setTimeout(() => {
      btn.removeAttribute("btn-focus");
    }, 200);
  });
});

profile.forEach((prof, index) => {
  prof.addEventListener("click", () => {
    const detail = details[index];
    detail.toggleAttribute("visible");
  });
});
