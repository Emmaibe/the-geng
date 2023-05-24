const button = document.querySelectorAll("button");

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.toggleAttribute("btn-focus");

    setTimeout(() => {
      btn.removeAttribute("btn-focus");
    }, 200);
  });
});
