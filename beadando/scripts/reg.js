const regisztracioForm = document.getElementById("regisztracio");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const felnevIn = document.getElementById("felnev");
const jelszoIn = document.getElementById("jelszo");
const korIn = document.getElementById("kor");
const termsCheck = document.getElementById("terms");
const emailIn = document.getElementById('email');

const felnevError = document.getElementById("felnev-error");
const jelszoError = document.getElementById("jelszo-error");
const korError = document.getElementById("kor-error")
const termsError = document.getElementById("terms-error")
const emailErr = document.getElementById('email-error');

const regSiker = document.getElementById("reg-siker");

if (regisztracioForm) {
    regisztracioForm.addEventListener('submit', function(event) {
        let isValid = true;

        const errors = document.querySelectorAll('.error-msg');
        const inputs = document.querySelectorAll('input');
        inputs.forEach(el => el.classList.remove('input-hiba'));
        errors.forEach(el => el.textContent = "");
    
        if (felnevIn.value.trim() === "") {
            felnevError.textContent = "Kötelező kitölteni!";
            felnevIn.classList.add('input-hiba');
            isValid = false;
        }
        else {
            if(felnevIn.value.trim().length < 5) {
                felnevError.textContent = "Legalább 5 karakter!";
                felnevIn.classList.add('input-hiba');
                isValid = false;       
            };
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

        if (jelszoIn.value.trim() === "") {
            jelszoError.textContent = "Kötelező kitölteni!";
            jelszoIn.classList.add('input-hiba');
            isValid = false;
        }
        else {
            if (jelszoIn.value.trim().length < 8) {
                jelszoError.textContent = "Legalább 8 karakter!";
                jelszoIn.classList.add('input-hiba');
                isValid = false;                
            };
        };

        if (Number(korIn.value) < 16) {
            korError.textContent = "Sajnáljuk, de legalább 16 évesnek kell lenned a regisztrációhoz";
            korIn.classList.add('input-hiba');
            isValid = false;
        };
        
        if (!termsCheck.checked) {
            termsError.textContent = "Kötelező elfogadni!";
            termsCheck.classList.add('input-hiba');
            isValid = false;
        };


        if (!isValid) {
            event.preventDefault();
        } else {
            event.preventDefault(); //folyamatosan átdobál egy üres weboldalra a POST miatt, nyilván emiatt az adatot nem küldi el, javascript fetch() kéne még ide
            regisztracioForm.reset();
            regSiker.textContent = "Sikeres regisztráció! Kérlek erősítsd meg az email címed!";
            regSiker.classList.add('siker-uzenet');
        };
    });
};