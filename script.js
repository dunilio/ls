
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", navigation.classList.contains("open"));
    });
  }

  const currentPage = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) link.classList.add("active");
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: .12});

  document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

  // const applicationForm = document.querySelector("#applicationForm");
  // if (applicationForm) {
  //   applicationForm.addEventListener("submit", event => {
  //     event.preventDefault();
  //     const name = applicationForm.querySelector("[name='name']").value.trim();
  //     const phone = applicationForm.querySelector("[name='phone']").value.trim();
  //     if (!name || !phone) {
  //       alert("Пожалуйста, заполните имя и контактный телефон.");
  //       return;
  //     }
  //     alert("Заявка отправлена");
  //     applicationForm.reset();
  //   });
  // }

  const year = document.querySelector("#currentYear");
  if (year) year.textContent = new Date().getFullYear();
});
