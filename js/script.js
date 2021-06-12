"use strict";

// slider1

// $(document).ready(function () {
//   $('.carousel__clock').slick({
//     dots: true,
//     adaptiveHeight: true,
//     infinite: true,
//     speed: 500,
//     fade: true,
//     cssEase: 'linear',
//     prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/chevron_left_solid_980.png" alt=""></button>',
//     nextArrow: '<button type="button" class="slick-next"><img src="img/slider/chevron_right_solid_982.png" alt=""></button>',
//   });

//   document.querySelectorAll('.slick-dots li button').forEach(function (item, e) {
//     item.innerHTML = '';
//   });
// });


// Slider2  

const carousel__boxImg = document.querySelectorAll(".carousel__box-img"),
  carousel__next = document.querySelector(".carousel__next"),
  carousel__back = document.querySelector(".carousel__back"),
  carousel__clock = document.querySelector(".carousel__clock");

function hideSlider() {
  carousel__boxImg.forEach((item) => {
    item.classList.add("hide");
    item.classList.remove("show");
  });
}
hideSlider();

function showSlider(i = 0) {
  carousel__boxImg[i].classList.add("show");
}

showSlider();

function slider2() {
  let i = 0;
  carousel__clock.addEventListener("click", (e) => {
    if (e.target && e.target.matches(`.carousel__next`)) {
      if (i == 2) {
        carousel__next.removeEventListener("click", (e));
      } else if (i <= 2) {
        i++;
        hideSlider();
        showSlider(i);
      }
    }
  });


  carousel__back.addEventListener("click", (e) => {
    if (i == 0) {
      carousel__back.removeEventListener("click", (e));
    } else if (i <= 2) {
      i--;
      hideSlider();
      showSlider(i);
    }
  });


}

slider2();



// Forms

const productContent = document.querySelectorAll(".product__content"),
  productDetails = document.querySelectorAll(".product__details"),
  productList = document.querySelectorAll(".product__list"),
  productBack = document.querySelectorAll(".product__back"),
  fitness = document.querySelector("#fitness"),
  run = document.querySelector("#run"),
  triathlon = document.querySelector("#triathlon"),
  productWapper = document.querySelectorAll(".product__wapper"),
  dataFitness = document.querySelectorAll(".product__wapper"),
  tabsBox = document.querySelectorAll(".tabs__box");


function Tab(i) {
  productContent[i].classList.toggle("product__content_active");
  productList[i].classList.toggle("product__list_active");
}

function TabNext(selector) {
  selector.forEach((item, i) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      Tab(i);
    });
  });
}
TabNext(productDetails);
TabNext(productBack);

// Tabs 


function hideBlock(selektor) {
  tabsBox.forEach(item => {
    item.classList.remove("tabs__box_active"); 
  });

  document.querySelectorAll(selektor).forEach(item => {
    item.classList.add("hide");
    item.classList.remove("show");
  });
}

function showBlock(selektor) {
  document.querySelectorAll(selektor).forEach(item => {
    item.classList.add("show");
    item.classList.remove("hide");
  });
}

function Tabfitness(fitness, idFitness, run, idRun, triathlon, idTriathlon) {
  document.querySelector(".tabs__wapper").addEventListener("click", (e) => {
    document.querySelectorAll(".tabs__item").forEach((item, i) => {
      if (e.target && e.target.matches(idFitness)) {
        if (item == e.target) {
          hideBlock(triathlon);
          hideBlock(run);
          showBlock(fitness);
          tabsBox[i].classList.toggle("tabs__box_active");
        }
      } else if (e.target && e.target.matches(idRun)) {
        if (item == e.target) {
          showBlock(run);
          hideBlock(fitness);
          hideBlock(triathlon);
          tabsBox[i].classList.toggle("tabs__box_active");
        }
      } else if (e.target && e.target.matches(idTriathlon)) {
        if (item == e.target) {
          showBlock(triathlon);
          hideBlock(run);
          hideBlock(fitness);
          tabsBox[i].classList.toggle("tabs__box_active");

        }
      }
    });
  });




}

Tabfitness(".product_fitness", "#fitness", '.product_run', '#run', '.product_triathlon', '#triathlon');