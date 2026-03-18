let ktoTeraz = 'X';
let czyKoniec = false;

function ruch(numer) {
    let pole = document.getElementById('k' + numer);

    
    if (pole.innerText === "" && czyKoniec === false && ktoTeraz === 'X') {
        pole.innerText = 'X';
        sprawdzCzyWygrana();

        if (!czyKoniec) {
            ktoTeraz = 'O';
            document.getElementById('info').innerText = "Oponent myśli...";
            
          
            setTimeout(ruchOponenta, 500); 
        }
    }
}

function ruchOponenta() {
    if (czyKoniec) return;

    
    let wolneKratki = [];
    for (let i = 0; i < 9; i++) {
        if (document.getElementById('k' + i).innerText === "") {
            wolneKratki.push(i);
        }
    }

    
    if (wolneKratki.length > 0) {
        let losowyNumer = wolneKratki[Math.floor(Math.random() * wolneKratki.length)];
        document.getElementById('k' + losowyNumer).innerText = 'O';
        
        sprawdzCzyWygrana();

        if (!czyKoniec) {
            ktoTeraz = 'X';
            document.getElementById('info').innerText = "Twoja tura (X)";
        }
    }
}

function sprawdzCzyWygrana() {
    let p0 = document.getElementById('k0').innerText;
    let p1 = document.getElementById('k1').innerText;
    let p2 = document.getElementById('k2').innerText;
    let p3 = document.getElementById('k3').innerText;
    let p4 = document.getElementById('k4').innerText;
    let p5 = document.getElementById('k5').innerText;
    let p6 = document.getElementById('k6').innerText;
    let p7 = document.getElementById('k7').innerText;
    let p8 = document.getElementById('k8').innerText;

    if ((p0 != "" && p0 == p1 && p1 == p2) ||
        (p3 != "" && p3 == p4 && p4 == p5) ||
        (p6 != "" && p6 == p7 && p7 == p8) ||
        (p0 != "" && p0 == p3 && p3 == p6) ||
        (p1 != "" && p1 == p4 && p4 == p7) ||
        (p2 != "" && p2 == p5 && p5 == p8) ||
        (p0 != "" && p0 == p4 && p4 == p8) ||
        (p2 != "" && p2 == p4 && p4 == p6)) {
        
        document.getElementById('info').innerText = "Wygrał: " + ktoTeraz;
        czyKoniec = true;
    } else if (p0!="" && p1!="" && p2!="" && p3!="" && p4!="" && p5!="" && p6!="" && p7!="" && p8!="") {
        document.getElementById('info').innerText = "Remis!";
        czyKoniec = true;
    }
}