const szemelyisegteszt = document.getElementById('szemelyisegteszt');
const kerdesek = [["Melyiket csinálnád szívesebben?", "Luxus nyaralás", "Otthoni magány", "Hegymászás", "Terepfutás"],
                  ["Melyiket használnád inkább?", "Iphone 17 Pro", "Nokia 3310", "Dobozos TV", "Samsung Fold"],
                  ["Milyen magas vagy?", "170-190cm", "<150cm", ">190cm", "150-169cm"],
                  ["Mit sportolnál szívesebben?", "Boxolás", "Semmi", "Sumo", "Futás"],
                  ["Melyik tantárgyat választod?", "Matematika", "Történelem", "Fizika", "Testnevelés"],
                  ["Milyen háziállatot választanál?", "Kutya", "Egér", "Elefánt", "Cica"],
                  ["Hány éves vagy?", "<20 éves", ">60 éves", "41-60 éves", "20-40 éves"]
];
const tankok = ["M1 Abrams", "T-26", "Maus", "M18 Hellcat"];
const pontok = [0, 0, 0, 0]
const kerdes = document.getElementById('kerdes');
const valasztas4 = document.getElementById('valasztas4');
const valasztas3 = document.getElementById('valasztas3');
const valasztas2 = document.getElementById('valasztas2');
const valasztas1 = document.getElementById('valasztas1');
const ablak = document.getElementById("teszt-ablak");
const tesztgomb = document.getElementById("tesztgomb");

var jelenleg = 0;

function pontozas(pontAdat, valasz) {
    for (var i = 0; i < 4; i++) {
        if (valasz == i) pontAdat[i]++;
    }
};
function kovetkezo(index) {
    kerdes.innerText = kerdesek[index][0];
    valasztas1.innerText = kerdesek[index][1];
    valasztas2.innerText = kerdesek[index][2];
    valasztas3.innerText = kerdesek[index][3];
    valasztas4.innerText = kerdesek[index][4];
    if (index == kerdesek.length - 1) {
        tesztgomb.innerText = "Befejezés";
    };
};
function eredmenyIndex(pontAdat) {
    var hol = 0;
    for (var i = 1; i < pontAdat.length; i++) {
        if (pontAdat[i] > pontAdat[hol]) {
            hol = i;
        };
    };
    return hol;
};


if (szemelyisegteszt) {
    szemelyisegteszt.addEventListener('submit', function(event) {
        event.preventDefault();
        var valasztas = document.querySelector('input[name="kviz"]:checked').value;

        if (event.submitter) {
            if (jelenleg < kerdesek.length) {
                if (jelenleg === 0) {
                    valasztas1.style.backgroundColor = 'white';
                    valasztas2.style.backgroundColor = "white";
                    valasztas3.style.backgroundImage = 'none';
                    valasztas4.style.backgroundColor = "white";
                };
                
                pontozas(pontok, valasztas);
                kovetkezo(jelenleg);
                szemelyisegteszt.reset();
                jelenleg++;
            }
            else {
                tankInd = eredmenyIndex(pontok);

                ablak.innerHTML = "";
                const uzenet = document.createElement("div");
                uzenet.innerHTML = 'Te egy <span id="tanknev">' + tankok[tankInd] + '</span> vagy!';
                uzenet.classList.add("igazit");
                ablak.appendChild(uzenet);

                const kep = document.createElement("img");
                kep.src = "kep/teszt/" + tankok[tankInd] + ".jpg";
                kep.classList.add("tesztkep");
                ablak.appendChild(kep);

            };

        };
    });
};