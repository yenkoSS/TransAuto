const navHeaderLinkList = document.querySelectorAll(".nav-header-list-lg-link");
navHeaderLinkList.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const linkId = link.getAttribute("href");
    document.querySelector(linkId).scrollIntoView({ behavior: "smooth" });
  });
});

const navFooterLinkList = document.querySelectorAll(".nav-footer-list-link");
navFooterLinkList.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const linkId = link.getAttribute("href");
    document.querySelector(linkId).scrollIntoView({ behavior: "smooth" });
  });
});

const navHeaderLinkSmList = document.querySelectorAll(".nav-header-list-sm-link");
navHeaderLinkSmList.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const linkId = link.getAttribute("href");
    document.querySelector(".nav-header-list-sm").style.display = "none";
    document.querySelector(linkId).scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelector(".icon-menu").addEventListener("click", () => {
  document.querySelector(".nav-header-list-sm").style.display = "flex";
});

document.querySelector(".icon-close").addEventListener("click", () => {
  document.querySelector(".nav-header-list-sm").style.display = "none";
});

const headerLogoEl = document.querySelector(".logo-header");
headerLogoEl.addEventListener("click", (e) => {
  e.preventDefault();
  const linkId = headerLogoEl.getAttribute("href");
  document.querySelector(linkId).scrollIntoView({ behavior: "smooth" });
});

const headerFooterEl = document.querySelector(".logo-footer");
headerFooterEl.addEventListener("click", (e) => {
  e.preventDefault();
  const linkId = headerFooterEl.getAttribute("href");
  document.querySelector(linkId).scrollIntoView({ behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (scrollY > 800) {
    document.querySelector(".nav-header").classList.add("fixed-nav-header");
  } else if (scrollY < 800) {
    document.querySelector(".nav-header").classList.remove("fixed-nav-header");
  }
});

const cardServicesList = document.querySelectorAll(".card-services");
const cardPricesList = document.querySelectorAll(".card-prices");
const cardTestimonialsList = document.querySelectorAll(".card-testimonial");
const textDetailsList = document.querySelectorAll(".text-services-details");

const cardsObserverY = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("card-offsetY0", entry.isIntersecting);
    if (entry.isIntersecting) cardsObserverY.unobserve(entry.target);
  });
});

const cardsObserverX = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("card-offsetX0", entry.isIntersecting);
    if (entry.isIntersecting) cardsObserverX.unobserve(entry.target);
  });
});

const textObserverX = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("card-offsetX0Slow", entry.isIntersecting);
    if (entry.isIntersecting) textObserverX.unobserve(entry.target);
  });
});

cardServicesList.forEach((card) => cardsObserverY.observe(card));
cardPricesList.forEach((card) => cardsObserverY.observe(card));
cardTestimonialsList.forEach((card) => cardsObserverX.observe(card));
textDetailsList.forEach((text) => textObserverX.observe(text));
