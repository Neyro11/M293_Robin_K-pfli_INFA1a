// Kontakt Code JS
const form = document.querySelector("form");
const contactButton = document.querySelector("#contact-button");
let contactName = document.querySelector("#form-text");
let contactMail = document.querySelector("#form-email");
let contactMessage = document.querySelector("#form-message");

const thanksMessage = () => {
  alert("thank you for contacting us");
};

contactButton.addEventListener("click", () => {
  if (!contactName === "" && !contactMail === "" && !contactMessage === "") {
    console.log(`Name: ${contactName}
               E-Mail: ${contactMail}
               Nachricht: ${contactMessage}`);
    thanksMessage();
  }
});
form.addEventListener("submit", function (e) {
  // Verhindert das Standardverhalten (Neuladen der Seite)
  e.preventDefault();
});
