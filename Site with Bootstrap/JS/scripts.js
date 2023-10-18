"use strict";

const minusBtns = document.querySelectorAll(".js-btn-minus");
const plusBtns = document.querySelectorAll(".js-btn-plus");

const colorBtns = document.querySelectorAll(".color-btn");

const liveToastBtns = document.querySelectorAll(".liveToastBtn");

minusBtns.forEach((minusBtn) => {
  minusBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const inputNumberEl =
      this.closest(".input-group").querySelector(".form-control");
    if (+inputNumberEl.value > 1) {
      inputNumberEl.value = parseInt(inputNumberEl.value) - 1;
    } else {
      inputNumberEl.value = parseInt(1);
    }
  });
});

plusBtns.forEach((plusBtn) => {
  plusBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const inputNumberEl =
      this.closest(".input-group").querySelector(".form-control");

    const inputNumber = +inputNumberEl.value;
    if (!Number.isInteger(inputNumber)) inputNumberEl.value = 0;

    inputNumberEl.value = parseInt(inputNumberEl.value) + 1;
  });
});

colorBtns.forEach((colorBtn) => {
  colorBtn.addEventListener("click", function () {
    this.classList.toggle("clicked");
  });
});

liveToastBtns.forEach((liveToastBtn) => {
  liveToastBtn.addEventListener("click", function () {
    const toast = new bootstrap.Toast("#liveToast");
    toast.show();
  });
});

const faDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
const enDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
function numberPerToEng(num) {
  num = num.replaceAll("٫", "");
  let index = 0;
  let engNum = "";
  for (let i = 0; i < num.length; i++) {
    index = faDigits.indexOf(num[i]);
    engNum += enDigits[index];
  }
  return +engNum;
}

function numberEngToPer(num) {
  let index = 0;
  let perNum = "";
  for (let i = 0; i < num.length; i++) {
    index = enDigits.indexOf(num[i]);
    perNum += faDigits[index];
  }
  return addDividerToPerNum(perNum);
}

function addDividerToPerNum(num) {
  if (num.length < 3) return num;

  const numWithDivArr = [];
  let addDiv = 0;

  for (let i = num.length - 1; i >= 0; i--) {
    numWithDivArr.unshift(num[i]);
    addDiv++;
    if (addDiv === 3) {
      numWithDivArr.unshift("٫");
      addDiv = 0;
    }
  }
  if (numWithDivArr[0] === "٫") numWithDivArr.shift();
  return numWithDivArr.join("");
}
