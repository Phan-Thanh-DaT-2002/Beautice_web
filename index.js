// document.addEventListener("DOMContentLoaded", function () {
//   window.addEventListener("scroll", function () {
//     let servicesSection = document.querySelector(".services");
//     let aboutSection = document.querySelector(".about");
//     let teamSection = document.querySelector(".team");
//     let screenPosition = window.innerHeight / 1.3;

//     if (servicesSection.getBoundingClientRect().top < screenPosition) {
//       servicesSection.classList.add("visible");
//       observer.unobserve(entry.target);
//     }
//     if (teamSection.getBoundingClientRect().top < screenPosition) {
//       aboutSection.classList.add("visible");
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  let sections = document.querySelectorAll(".services, .about, .team, .contact, .footer");
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2, // Chỉ kích hoạt khi 20% phần tử xuất hiện
  };

  let observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 500);
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
});