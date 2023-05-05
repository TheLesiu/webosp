const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // zapobiegamy domyślnej akcji kliknięcia w link

    const targetId = link.getAttribute("href"); // pobieramy id sekcji docelowej z atrybutu href

    const targetElement = document.querySelector(targetId); // znajdujemy element docelowy po jego id

    const targetPosition = targetElement.offsetTop; // pobieramy pozycję docelowego elementu od góry strony

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth", // płynne przewijanie
    });
  });
});
