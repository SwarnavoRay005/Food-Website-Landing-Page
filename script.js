function searchBar() {
  const search = document.querySelector(".search");
  search.classList.toggle("active");
}

function toggleFlip() {
  const imgBox = document.querySelector(".imgBox");
  const btn = document.querySelector(".btn");
  imgBox.classList.toggle("active");
  btn.classList.toggle("active");
}

function changeImg(img) {
  const foodImg = document.querySelector(".food-img");
  foodImg.src = `assets/${img}`;
}

function toggleMenu() {
  const menu = document.querySelector('.menu');
  const navMobile = document.querySelector('.nav-mobile');
  menu.classList.toggle('active');
  navMobile.classList.toggle('active');
}