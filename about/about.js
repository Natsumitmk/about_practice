const modalWindow = document.getElementById("coupon_modal");
const closeButton = document.getElementById("modal_close_button");

closeButton.addEventListener("click", () => {
  modalWindow.classList.add("is-hidden");
});

const form = document.getElementById("form");
const submitButton = document.getElementById("button-submission");

form.addEventListener("input", update);
form.addEventListener("change", update);

function update() {
    const isRequired = form.checkValidity();
  
    if (isRequired) {
      alert("Thank you");
      return;
    }
  }