const subscribeForm = document.getElementById("subscribeForm");
const emailInput = document.getElementById("email-input");
const validationText = document.getElementById("validationText");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const light = document.getElementById("light");
const cream = document.getElementById("cream");
const sofaList = document.getElementsByClassName("sofas");
const colors = document.querySelectorAll(".sofa-colors");

const validateEmail = (email) => {
  return email
    .toString()
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

subscribeForm.addEventListener("submit", (e) => {
  e.preventDefault(emailInput.value);
  if (validateEmail(emailInput.value)) {
    validationText.style.display = "none";
  } else {
    validationText.style.display = "block";
  }
});

const changeSofa = (index) => {
  colors.forEach((color) => {
    color.classList.remove("bordered-content");
    colors[index - 1].classList.add("bordered-content");
  });
  document.getElementById("sofa").innerHTML = ` <div class="sofa-container">
  <div class="sofa">
    <div class="sofa-little-item">
      <div class="sofa-description-container">
        <div class="sofa-description">3 Seater sofa</div>
        <div class="sofa-price">Desde 2500€</div>
      </div>
      <img class="big-sofa-image" src="./assets/sofa-${index}-1.png" alt="" />
    </div>
    <div class="sofa-little-item">
      <div class="sofa-description-container">
        <div class="sofa-description">3 Seater sofa</div>
        <div class="sofa-price">Desde 2500€</div>
      </div>
      <img class="big-sofa-image" src="./assets/sofa-${index}-2.png" alt="" />
    </div>
  </div>
  <div class="sofa-2">
    <div class="sofa-little-item">
      <div class="sofa-description-container">
        <div class="sofa-description">3 Seater sofa</div>
        <div class="sofa-price">Desde 2500€</div>
      </div>
      <img class="big-sofa-image" src="./assets/sofa-${index}-3.png" alt="" />
    </div>
    <div class="sofa-little-item">
      <div class="sofa-description-container">
        <div class="sofa-description">3 Seater sofa</div>
        <div class="sofa-price">Desde 2500€</div>
      </div>
      <img class="big-sofa-image" src="./assets/sofa-${index}-1.png" alt="" />
    </div>
  </div>
</div>
<div class="big-sofa-container">
  <div class="sofa-description-container">
    <div class="sofa-description">3 Seater sofa</div>
    <div class="sofa-price">Desde 2500€</div>
  </div>
  <img class="big-sofa-image" src="./assets/sofa-${index}-3.png" alt="" />
</div>`;
};

document.querySelector("#checkbox").addEventListener("change", () => {
  document.querySelector("#checkbox").checked
    ? (document.querySelector(".menu").style.background = "#FFF")
    : (document.querySelector(".menu").style.background = "transparent");
});

colors.forEach((color, index) => {
  color.classList.remove("bordered-content");
  color.addEventListener("click", () => changeSofa(index + 1));
});
