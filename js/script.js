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

//Modals

const windows = document.querySelector(".windows"),
  close = document.querySelectorAll(".window-close"),
  windowsConsultation = document.querySelector(".windows-consultation"),
  product_order = document.querySelector(".product_order"),
  order = document.querySelector("#order"),
  btn_product = document.querySelectorAll(".btn_product"),
  product__title = document.querySelectorAll(".product__title");

function hideModals() {
  windows.classList.add("hide");
  windows.classList.remove("show");
  windowsConsultation.classList.add("hide");
  windowsConsultation.classList.remove("show");
  product_order.classList.add("hide");
  product_order.classList.remove("show");
}
hideModals();

function showModals(wapperSelector, selector) {
  wapperSelector.classList.remove("hide");
  wapperSelector.classList.add("show");
  selector.classList.remove("hide");
  selector.classList.add("show");
}

document.querySelector(".btn_main").addEventListener("click", () => {
  showModals(windows, windowsConsultation);
});

btn_product.forEach((item, i) => {
  item.addEventListener("click", (e) => {
    if (e.target === item) {
      showModals(windows, product_order);
      order.innerText = product__title[i].innerText
      /* клонирование текста селектора product__title[i]
           в селектор order */
    }
  });
});

document.addEventListener('keydown', (e) => {
  if (e.code === "Escape" && windows.classList.contains("show")) {
    hideModals();
  }
});


document.querySelector(".windows").addEventListener("click", (e) => {
  if (e.target == windows) {
    hideModals();
  }
  if (e.target && e.target.matches(".window-close")) {
    hideModals();
  }
});

// Валидация форм

const forms = document.querySelectorAll("form"),
  regularEmail = /^[^@]+@[^@.]+\.[^@]+$/,
  regularUser = /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/,
  regularTel = /^((\+?7|8)[ \-] ?)?((\(\d{3}\))|(\d{3}))?([ \-])?(\d{3}[\- ]?\d{2}[\- ]?\d{2})$/;
// Переменные для проверки на зполненность и валидированность полей
let validateEmail,
  validateUser,
  validateTel;




forms.forEach((form, i) => {


  // Валидация форм
  form.querySelectorAll("input").forEach(input => {
    if (!input.classList.contains(".btn")) {
      if (input != "") {
        input.addEventListener('blur', () => {
          validateInput(input);
        });
      }
    }
  });

  const validateInput = (input) => {
    if (input.name == "name") {
      // Обращаемся к input name. Проверка имени пользователя      
      if (!regularUser.test(input.value) &&
        input.value != '') {
        // если не соответствует эталону (регулярному выражению) то
        // проверка на валидность && и валидность проверяется, если 
        // не пустая строка. Последнее, чтобы сообщение об ошибке не
        // появлялось при загр. страницы.          
        input.nextElementSibling.textContent = "Не корректное ФИО";
        input.classList.add("form-feed__input__error");
        input.classList.remove("form-feed__input__not-error");
        validateUser = false;
      } else {
        input.nextElementSibling.textContent = "";
        // если дозаполняем, то текст ошибки удаляется
        input.classList.remove("form-feed__input__error");
        input.classList.add("form-feed__input__not-error");
        validateUser = true;
      }
    }

    if (input.name == "email") {
      if (!regularEmail.test(input.value) &&
        input.value != "") {
        input.nextElementSibling.textContent = "Не корректный email";
        input.classList.add("form-feed__input__error");
        input.classList.remove("form-feed__input__not-error");
        validateEmail = false;
      } else {
        input.nextElementSibling.textContent = "";
        // если дозаполняем, то текст ошибки удаляется
        input.classList.remove("form-feed__input__error");
        input.classList.add("form-feed__input__not-error");
        validateEmail = true;
      }
    }

    if (input.name == 'phone') {
      if (!regularTel.test(input.value) &&
        input.value != "") {
        input.nextElementSibling.textContent = "Не корректный номер телефона";
        input.classList.add("form-feed__input__error");
        input.classList.remove("form-feed__input__not-error");
        validateTel = false;
      } else {
        input.nextElementSibling.textContent = "";
        // если дозаполняем, то текст ошибки удаляется
        input.classList.remove("form-feed__input__error");
        input.classList.add("form-feed__input__not-error");

        validateTel = true;
      }
    }
  };

  // Маска номера телефона
  const MaskTel = function () {

    var phoneInputs = form.querySelectorAll('[data-tel]');

    var getInputNumbersValue = function (input) {
      // Return stripped input value — just numbers
      return input.value.replace(/\D/g, '');
    }

    var onPhonePaste = function (e) {
      var input = e.target,
        inputNumbersValue = getInputNumbersValue(input);
      var pasted = e.clipboardData || window.clipboardData;
      if (pasted) {
        var pastedText = pasted.getData('Text');
        if (/\D/g.test(pastedText)) {
          // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
          // formatting will be in onPhoneInput handler
          input.value = inputNumbersValue;
          return;
        }
      }
    }

    var onPhoneInput = function (e) {
      var input = e.target,
        inputNumbersValue = getInputNumbersValue(input),
        selectionStart = input.selectionStart,
        formattedInputValue = "";

      if (!inputNumbersValue) {
        return input.value = "";
      }

      if (input.value.length != selectionStart) {
        // Editing in the middle of input, not last symbol
        if (e.data && /\D/g.test(e.data)) {
          // Attempt to input non-numeric symbol
          input.value = inputNumbersValue;
        }
        return;
      }

      if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
        if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
        var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
        formattedInputValue = input.value = firstSymbols + " ";
        if (inputNumbersValue.length > 1) {
          formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
        }
        if (inputNumbersValue.length >= 5) {
          formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
        }
        if (inputNumbersValue.length >= 8) {
          formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
        }
        if (inputNumbersValue.length >= 10) {
          formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
        }
      } else {
        formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
      }
      input.value = formattedInputValue;
    }
    var onPhoneKeyDown = function (e) {
      // Clear input after remove last symbol
      var inputValue = e.target.value.replace(/\D/g, '');
      if (e.keyCode == 8 && inputValue.length == 1) {
        e.target.value = "";
      }
    }
    for (var phoneInput of phoneInputs) {
      phoneInput.addEventListener('keydown', onPhoneKeyDown);
      phoneInput.addEventListener('input', onPhoneInput, false);
      phoneInput.addEventListener('paste', onPhonePaste, false);
    }

  };

  MaskTel();


  // Проверка на заполненность форм  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.querySelectorAll("input").forEach(input => {
      if (input.tagName != "BUTTON") {
        // отсекаем ненужные элементы, в данном случае checkbox и button
        if (input.value == "") {
          // и если оставшиеся элементы не заполнены
          input.nextElementSibling.textContent = "Данное поле не заполнено!";
          input.classList.add("form-feed__input__error");
          input.classList.remove("form-feed__input__not-error");

          // то у этого незаполненного элемента сосед nextElementSibling 
          // будет показывать указанный текст
          // в верстке под каждым инпутом добавить div, в который и будет
          // записываться этот текст          
        } else {
          input.nextElementSibling.textContent = "";
          // если дозаполняем, то текст ошибки удаляется 
          input.classList.remove("form-feed__input__error");
          input.classList.add("form-feed__input__not-error");
          if (validateEmail &&
            validateUser &&
            validateTel) {
            alert("Форма отправлена");
            form.reset();
            hideModals();
            form.removeEventListener("submit", (e));
          }
        }
      }
    });

  });




});