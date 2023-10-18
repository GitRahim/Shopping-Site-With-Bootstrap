"use strict";

const inputNumEls = document.querySelectorAll(".form-control");

const productSumPriceEls = document.querySelectorAll(".product-sum-price");

const sumPriceOfAllProductsEl = document.getElementById(
  "sum-price-all-product"
);

const offNumberEls = document.querySelectorAll(".off-number");

const sumPriceFinalEl = document.getElementById("sum-price-final");

minusBtns.forEach((minusBtn) => {
  minusBtn.addEventListener("click", function (e) {
    e.preventDefault();
    updateSumPriceProduct(this);
  });
});

plusBtns.forEach((plusBtn) => {
  plusBtn.addEventListener("click", function (e) {
    e.preventDefault();
    updateSumPriceProduct(this);
  });
});

inputNumEls.forEach((inputNumEl) => {
  inputNumEl.addEventListener("keyup", function (e) {
    e.preventDefault();

    const inputNumber = +inputNumEl.value;
    updateSumPriceProduct2(this, inputNumber);
  });
});

function updateSumPriceProduct(el) {
  const inputNumber = +el.closest(".input-group").querySelector(".form-control")
    .value;
  updateSumPriceProduct2(el, inputNumber);
}

function updateSumPriceProduct2(el, inputNumber) {
  if (!Number.isInteger(inputNumber)) return;

  const productPrice = numberPerToEng(
    el.closest("TR").querySelector(".product-price").textContent
  );
  const totalProductPrice = numberEngToPer(inputNumber * productPrice + "");
  el.closest("TR").querySelector(".product-sum-price").textContent =
    totalProductPrice;

  updateFinalPrice();
}

function updateFinalPrice() {
  let sumPriceOfAllProducts = 0;
  productSumPriceEls.forEach((productSumPriceEl) => {
    sumPriceOfAllProducts += numberPerToEng(productSumPriceEl.textContent);
  });

  sumPriceOfAllProductsEl.textContent = numberEngToPer(
    sumPriceOfAllProducts + ""
  );

  let offNumber = 0;

  offNumberEls.forEach((offNumberEl) => {
    offNumber += numberPerToEng(offNumberEl.textContent);
  });

  sumPriceFinalEl.textContent = numberEngToPer(
    sumPriceOfAllProducts - offNumber + ""
  );
}
