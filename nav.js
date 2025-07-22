document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleNav");
  const nav = document.getElementById("sideNav");

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("expanded");

    // Atualiza atributo aria-expanded
    const expanded = nav.classList.contains("expanded");
    toggleBtn.setAttribute("aria-expanded", expanded);
  });
});