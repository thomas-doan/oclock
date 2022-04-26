document.addEventListener("DOMContentLoaded", (event) => {
    let startTimer = document.querySelector(".miniteur :nth-child(3)");
    let getMinute = document.querySelector("#timeMinute");
    const displayTime = document.querySelector(".miniteur :nth-child(4)");
    let addMin = document.querySelector("#plus");
    let delMin = document.querySelector("#minus");
    let minutesexo1 = 0;
    var newData = 0;

    //chrono

    function increaseMinute() {
        console.log("++");
        console.log(newData);
        newData = newData + 60;
        console.log(newData);
    }

    function decreaseMinute() {
        console.log("--");
        console.log(newData);
        newData = newData - 60;
        console.log(newData);
    }

    function showTime(data_time) {
        minutesexo1 = parseInt(data_time / 60, 10);

        let secondes = parseInt(data_time % 60, 10);

        minutesexo1 = minutesexo1 < 10 ? "0" + minutesexo1 : minutesexo1;
        secondes = secondes < 10 ? "0" + secondes : secondes;

        displayTime.innerText = `${minutesexo1}:${secondes}`;
    }

    function loopTimeDecrease() {
        let timerId = setInterval(() => {
            if (newData >= 0) {
                showTime(newData);
                newData--;
                test = newData;
            } else {
                alert("FINI");
                clearInterval(timerId);
            }
        }, 1000);
    }

    startTimer.addEventListener("click", () => {
        newData = getMinute.value * 60;

        loopTimeDecrease();
    });

    addMin.addEventListener("click", () => {
        increaseMinute();
    });

    delMin.addEventListener("click", () => {
        decreaseMinute();
    });

    // chronometre //
    let chrono = document.getElementById("chrono");
    let resetBtn = document.getElementById("reset");
    let stopBtn = document.getElementById("stop");
    let startBtn = document.getElementById("start");
    let tour = document.getElementById("tour");

    let heures = 0;
    let minutes = 0;
    let secondes = 0;

    let timeout;

    let estArrete = true;
    let div = document.querySelector(".list");

    const liste = () => {
        var pc = document.createElement("p");
        pc.textContent =
            "H " + heures + " min " + minutes + " secondes " + secondes;
        div.appendChild(pc);
    };

    const demarrer = () => {
        let div = document.querySelector(".list");
        if (estArrete) {
            estArrete = false;
            defilerTemps();
        }
    };

    const arreter = () => {
        if (!estArrete) {
            estArrete = true;
            clearTimeout(timeout);
        }
    };

    const defilerTemps = () => {
        if (estArrete) return;

        secondes = parseInt(secondes);
        minutes = parseInt(minutes);
        heures = parseInt(heures);

        secondes++;

        if (secondes == 60) {
            minutes++;
            secondes = 0;
        }

        if (minutes == 60) {
            heures++;
            minutes = 0;
        }

        //   affichage
        if (secondes < 10) {
            secondes = "0" + secondes;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        if (heures < 10) {
            heures = "0" + heures;
        }

        chrono.textContent = `${heures}:${minutes}:${secondes}`;

        timeout = setTimeout(defilerTemps, 1000);
    };

    const reset = () => {
        chrono.textContent = "00:00:00";
        estArrete = true;
        heures = 0;
        minutes = 0;
        secondes = 0;
        clearTimeout(timeout);
        var suppr_div = document.querySelector(".list > p");
        suppr_div.remove();
    };

    startBtn.addEventListener("click", demarrer);
    stopBtn.addEventListener("click", arreter);
    resetBtn.addEventListener("click", reset);
    tour.addEventListener("click", liste);

    /*  HORLOGE */

    var heuresDiv = document.querySelector(".heures");
    var dateDiv = document.querySelector(".date");

    var affichageHeure = function() {
        var today,
            annee,
            listeMois,
            mois,
            listeJours,
            jourNUmero,
            jourNom,
            heures,
            minutes,
            secondes,
            deuxChiffres;

        today = new Date();

        annee = today.getFullYear();

        listeMois = [
            "Janvier",
            "Février",
            "Mars",
            "Avril",
            "Mai",
            "Juin",
            "Juillet",
            "Août",
            "Septembre",
            "Octobre",
            "Novembre",
            "Décembre",
        ];
        mois = listeMois[today.getMonth()];
        jourNUmero = today.getDate();

        listeJours = [
            "Dimanche",
            "Lundi",
            "Mardi",
            "Mercredi",
            "Jeudi",
            "Vendredi",
            "Samedi",
        ];
        jourNom = listeJours[today.getDay()];

        deuxChiffres = function(element) {
            if (element < 10) {
                return (element = "0" + element);
            } else {
                return element;
            }
        };

        heures = deuxChiffres(today.getHours());

        minutes = deuxChiffres(today.getMinutes());

        secondes = deuxChiffres(today.getSeconds());

        heuresDiv.textContent = heures + ":" + minutes + ":" + secondes;
        dateDiv.textContent =
            jourNom + ", " + jourNUmero + " " + mois + " " + annee;

        setTimeout(affichageHeure, 1000);
    };

    affichageHeure();
});