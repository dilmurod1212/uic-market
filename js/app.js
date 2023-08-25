const wrapper = document.querySelector(".wrapper"),
  slider = document.querySelector(".projects"),
  slide = document.querySelectorAll(".project"),
  width = window.getComputedStyle(wrapper).width,
  prev = document.querySelector(".prev"),
  next = document.querySelector(".next"),
  design = document.querySelectorAll(".info");

slider.style.width = 100 * slide.length + "%";
slider.style.display = "flex";
wrapper.style.overflow = "hidden";
slide.forEach((el) => {
  el.style.width = width;
});
// setInterval(() => {
//   slider.style.transform = "translateX(-500px)";
//   console.log("logger");
// }, 1000);

let idx = 0;
console.log();

function Change() {
  if (idx > slide.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = slide.length - 1;
  }
  slider.style.transform = `translateX(-${
    idx * width.slice(0, width.length - 2)
  }px`;
}

setInterval(() => {
  idx++;
  function clearClass() {
    design.forEach((el) => el.classList.remove("active"));
  }
  if (idx == 1) {
    clearClass();
    design[0].classList.add("active");
  } else if (idx == 2) {
    clearClass();
    design[1].classList.add("active");
  } else if (idx == 3) {
    clearClass();
    design[2].classList.add("active");
  } else {
    clearClass();
    design[3].classList.add("active");
  }
  console.log(idx);
  Change();
}, 3000);
next.addEventListener("click", () => {
  idx++;
  Change();
  console.log(idx);
});
prev.addEventListener("click", () => {
  idx--;
  console.log(idx);
  Change();
});
