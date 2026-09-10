// Kontakt Code JS
const form = document.querySelector("form");
const contactButton = document.querySelector("#contact-button");
const thankYouMessage = document.querySelector("#thank-you-message");
const thankYouMessageTitle = document.querySelector("#thank-you-message h2");
const errorMessage = document.querySelector("#error-message");

let contactName = document.querySelector("#form-name");
let contactMail = document.querySelector("#form-email");
let contactMessage = document.querySelector("#form-message");

const feedbackMessage = (success) => {
  if (success) {
    thankYouMessageTitle.textContent = `Vielen Dank für deine Nachricht, ${contactName.value}!`;
    form.classList.add("hidden");
    thankYouMessage.classList.remove("hidden");
  } else {
    errorMessage.textContent =
      "Hoppla! Bitte fülle alle Felder aus, bevor du abschickst.";
    errorMessage.classList.remove("hidden");
  }
};

form?.addEventListener("submit", function (e) {
  // Verhindert Neuladen der Seite
  e.preventDefault();

  if (
    contactName.value.trim() !== "" &&
    contactMail.value.trim() !== "" &&
    contactMessage.value.trim() !== ""
  ) {
    // Value von Radio buttons holen
    let feedbackButtons = document.querySelector(
      'input[name="preis"]:checked',
    )?.value;

    console.log(
      `
      Name: ${contactName.value}
      E-Mail: ${contactMail.value}
      Nachricht: ${contactMessage.value}
      Feedback zum Preis: ${feedbackButtons}`,
    );

    feedbackMessage(true);
  } else {
    feedbackMessage(false);
  }
});

//Smarphones
const smartphoneGrid = document.querySelector("#smartphone-grid");
let smartphoneData;

const getSmartphoneProducts = async () => {
  const response = await fetch(
    "https://dummyjson.com/products/category/smartphones",
  );
  smartphoneData = await response.json();
  console.log(smartphoneData.products);

  renderSmartphoneProducts();
};
const resetUl = () => {
  smartphoneGrid.innerHTML = "";
};

const renderSmartphoneProducts = async () => {
  if (!smartphoneGrid) return;

  resetUl();

  for (let i = 0; i < smartphoneData.products.length; i++) {
    let smartphoneCell = document.createElement("li");
    smartphoneCell.innerHTML = `          
            <img
              class="product-grid-img"
              src="${smartphoneData.products[i].images[0]}"
              alt="Bild von dem ${smartphoneData.products[i].title}"
            />
            <div class="product-grid-title">
              <h2>${smartphoneData.products[i].title}</h2>
              <div class="product-grid-price-cart">
                <p>${smartphoneData.products[i].price} CHF</p>
                <img
                  class="product-grid-cart"
                  src="/Bilder/assets/cart.png"
                  alt="Warenkorb Symbol"
                />
              </div>
            </div>

            <p>
              <!--Auswahlliste-->
              <label for="storage"></label>
              <select name="storage" id="storage">
                <option value="">Speicherplatz auswählen</option>
                <option value="128">128 GB</option>
                <option value="256">256 GB</option>
                <option value="512">512 GB</option>
              </select>
            </p>
            <p class="product-description">
              ${smartphoneData.products[i].description}
            </p>
`;
    smartphoneGrid.appendChild(smartphoneCell);
  }
};

//fetch all

document.addEventListener("DOMContentLoaded", () => {
  getSmartphoneProducts();
});
