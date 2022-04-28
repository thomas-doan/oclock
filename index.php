<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Timer</title>
    <script type="text/javascript" src="script.js"></script>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <head>

    </head>
    <main>

        <div class="miniteur">
            <p>Miniteur</p>
            <div class="augmenter_diminuer">

                <input type="number" id="timeMinute" placeholder="Minute">
            </div>

            <div>Start</div>
            <div>0</div>
            <div class="augmenter_diminuer">
                <div id="plus">+</div>
                <div id="minus">-</div>
            </div>

        </div>

        <div id="chronometre">
            <p>chronometre</p>
            <div id="chrono">00:00:00</div>
            <div id="buttons">
                <button id="reset" class="button">Reset</button>
                <button id="tour" class="button">Tour</button>
                <button id="stop" class="button">Arrêter</button>
                <button id="start" class="button">Démarrer</button>
            </div>
            <div class="list"></div>
        </div>

        <div class="horloge">
            <div> ! Horloge !</div>
            <div class="heures"></div>
            <div class="date"></div>
        </div>

        <div class="reveil">
            <div> ! reveil !</div>
            <div class="reveil_heures"></div>
            <div class="reveil_date"></div>
        </div>
    </main>
</body>

</html>