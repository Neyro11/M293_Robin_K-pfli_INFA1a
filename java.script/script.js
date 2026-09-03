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

form.addEventListener("submit", function (e) {
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
