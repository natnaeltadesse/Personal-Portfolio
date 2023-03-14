const ml = () => {
  window.open("https://github.com/SomeonePro72/Traffic-Sign-Detection");
};
const he = document.getElementById("sk");
const nav = document.getElementById("nav-colored");

document.body.onscroll = () => {
  let j = window.scrollY;
  if (j > 5) {
    nav.style.backgroundColor = "#0e1016";
  } else {
    nav.style.backgroundColor = "transparent";
  }
  console.log(j, "i:", i);
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements_l = document.querySelectorAll(".hidden-l");
const hiddenElements_r= document.querySelectorAll(".hidden-r");
hiddenElements_l.forEach((el) => observer.observe(el))
hiddenElements_r.forEach((el) => observer.observe(el))

const hiddenElements_sc= document.querySelectorAll(".hidden-sc");
hiddenElements_sc.forEach((el) => observer.observe(el))