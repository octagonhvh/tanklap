//login
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const bejelentkezesForm = document.getElementById("bejelentkezes");

const emailIn = document.getElementById('email');
const emailErr = document.getElementById('email-error');

const jelszoIn = document.getElementById("jelszo");
const jelszoError = document.getElementById("jelszo-error");

if (bejelentkezesForm) {
    bejelentkezesForm.addEventListener('submit', function(event) {
        let isValid = true;

        const errors = document.querySelectorAll('.error-msg');
        const inputs = document.querySelectorAll('input');
        inputs.forEach(el => el.classList.remove('input-hiba'));
        errors.forEach(el => el.textContent = "");

        if (!emailRegex.test(emailIn.value.trim())) {
            emailErr.textContent = "Hibás email cím!";
            emailIn.classList.add('input-hiba');
            isValid = false;
        };
        if (emailIn.value.trim() === "") {
            emailErr.textContent = "Kötelező kitölteni!";
            emailIn.classList.add('input-hiba');
            isValid = false;
        }
        if (jelszoIn.value.trim() === "") {
            jelszoError.textContent = "Kötelező kitölteni!";
            jelszoIn.classList.add('input-hiba');
            isValid = false;
        }
        if (!isValid) {
            event.preventDefault();
        } else {
            event.preventDefault(); //folyamatosan átdobál egy üres weboldalra a POST miatt, nyilván emiatt az adatot nem küldi el, js fetch() kéne még ide
            bejelentkezesForm.reset();
        };
    });
};
