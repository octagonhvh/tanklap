const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//kapcsolatfelvetel
const uzenetform = document.getElementById('kapcsolatfelvetel');

const nevIn = document.getElementById('nev');
const emailIn = document.getElementById('email');
const uzenetIn = document.getElementById('uzenet');

const nevErr = document.getElementById('nev-error');
const emailErr = document.getElementById('email-error');
const uzenetErr = document.getElementById('uzenet-error');

if (uzenetform) {
    uzenetform.addEventListener('submit', function(event) {
        let isValid = true;
    
        const errors = document.querySelectorAll('.error-msg');
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(el => el.classList.remove('input-hiba'));
        errors.forEach(el => el.textContent = "");
    
        if (nevIn.value.trim() === "") {
            nevErr.textContent = "Kötelező kitölteni!";
            nevIn.classList.add('input-hiba');
            isValid = false;
        };
        if (!emailRegex.test(emailIn.value.trim())) {
            emailErr.textContent = "Hibás email cím!";
            emailIn.classList.add('input-hiba');
            isValid = false;
        };
        if (emailIn.value.trim() === "") {
            emailErr.textContent = "Kötelező kitölteni!";
            emailIn.classList.add('input-hiba');
            isValid = false;
        };      
    
        if (uzenetIn.value.length < 100) {
            uzenetErr.textContent = "Legalább 100 karakter!";
            uzenetIn.classList.add('input-hiba');
            isValid = false;
        };
    
        if (!isValid) {
            event.preventDefault();
        } else {
            event.preventDefault(); //folyamatosan átdobál egy üres weboldalra a POST miatt, nyilván emiatt az adatot nem küldi el, javascript fetch() kéne még ide
            uzenetform.reset();
        };
    });
};