# Web App From Scratch @cmda-minor-web 2023 - 2024

Welcome to my WAFS project for the minor Web Design & Development :)

## Link

Here you can find the website https://evaboogaard.github.io/web-app-from-scratch-2324/

![](./proces/result.png)

## Data

For this project I used an API to fetch external data. The API I used is https://www.theaudiodb.com/

Here I got the album covers, titles and artist info.

## Wiki

Welcome! To this beautiful wiki!!!!!!!! Let's dive right in :)

### Table of Contents

[Maandag 5 feb](#5feb)  
[Dinsdag 6 feb](#6feb)  
[Woensdag 7 feb](#7feb)  
[Donderdag 8 feb](#8feb)  
[Vrijdag 9 feb](#9feb)  
[Maandag 12 feb](#12feb)
[Dinsdag 13 feb](#13feb)
[Woensdag 14 feb](#14feb)

<a name="5feb"/>

#### Maandag 5 feb

Ideeën:

-   GBA of NDS, met een pokemon look & feel (pixel art) en daarin een soort game, een backpack met items, of een pokedex met dingen die mij beschrijven
-   Windows XP simulation met allemaal icons. Ik vond dit idee stom toen ik er te lang over na ging denken. Icons waren wel cool (die kan je dus allemaal downloaden in een zipje!!!!! wauw!)
-   Hierna heb ik opgegeven en ben ik naar huis gegaan!!!!!!!! Morgen nieuwe kansen <3

![](./proces/img/1/note.jpeg)
![](./proces/img/1/note2.JPG)

<a name="6feb"/>

#### Dinsdag 6 feb

-   Oke nieuwe dag nieuw concept: een turntable met mijn favoriete albumpies ernaast, en dan iets van een titel en artiest ernaast. Dat moet allemaal dynamisch veranderen. Geen idee hoe.
-   Uiteindelijk is het concept omgevormd naar een tafel waar de platenspeler op staat, samen met een paspoortje en een landkaart. Het paspoort moet dan persoonlijke info over mij weergeven & de landkaart de weeklynerd talks.
-   Eerste fetch gedaan!!! Was super leuk would recommend 10/10

![](./proces/img/2/note.JPG)
![](./proces/img/2/note2.JPG)

<a name="7feb"/>

#### Woensdag 7 feb

-   ik heb een paspoortje toegevoegd aan de tafel, als je erop klikt komt de content in beeld. Ik zat nogal te struggelen met hoe ik dit in een soort paspoort layout moest krijgen, want ik wilde eigenlijk een ul met li items gebruiken. Dit kreeg ik echter met geen mogelijkheid goed voor elkaar, dus heb ik alles toch omgegooid naar div’jes en heb ik 2 sections gemaakt waarvan de parent een display: flex kreeg.

![](./proces/img/3/code.png)
![](./proces/img/3/code-2.png)
![](./proces/img/3/code-3.png)

-   ik heb mijn concept nog een keer nagelopen en nog een soort final sketch gemaakt:

![](./proces/img/3/note.JPG)

<a name="8feb"/>

#### Donderdag 8 feb

-   weeklynerd notebook btn gemaakt (toch geen landkaart want i have a life)
-   het aanpassen van de api data werkt niet meer als ik de images kleiner maak dus ik moet ff opnieuw beginnen. ik deed het dus eerst zo op basis van de scrollposition, maar dat werkte niet meer als de items kleiner werden (duh). nu voeg ik dus de ‘active’ class toe op basis van de clicks op de up- en down buttons. hier checkt hij dus elke keer als er geklikt wordt wat de currentActiveIndex moet worden.

![](./proces/img/4/code-1.png)
![](./proces/img/4/code-2.png)

-   Killian Valkhof heeft gister gepraat over carousels en hoe je deze met pure html en css kunt maken, ik heb dit tnt alleen nog in js gedaan. Dit wil ik dus nog aan gaan passen, in het kader van ‘make it work, make it good, make it pretty’.

![](./proces/img/4/code-3.png)

-   einde vd dag progress

![](./proces/img/4/code-4.png)

<a name="9feb"/>

#### Vrijdag 9 feb

-   wilde de radio buttons de speed of sound laten veranderen maar dat lukte niet. uiteindelijk was het probleem niet zo ingewikkeld en moest ik mijn id names veranderen en een beetje klooien met selectors. opvallend is wel dat chatgpt dit niet doorhad en zei dat ik prima een nummer als id kon gebruiken (was niet zo)

![](./proces/img/5/code.png)
![](./proces/img/5/code-1.png)
![](./proces/img/5/code-2.png)
![](./proces/img/5/code-3.png)
![](./proces/img/5/code-4.png)
![](./proces/img/5/code-5.png)
![](./proces/img/5/gpt.png)

-   audio vanuit apple music geprobeerd, was tantoe lelijk, uiteindelijk gekozen voor mp3'tjes die worden ingeladen met controls die worden veranderd als JS actief is bij de gebruiker (door domcontentloaded).
    ![](./proces/img/5/code-6.png)
    ![](./proces/img/5/code-7.png)

-   kreeg opeens vet veel errors in console, lag aan een regel in mn script
    ![](./proces/img/5/code-8.png)
    ![](./proces/img/5/code-9.png)

-   ik wil dat als er geen JS actief is bij de gebruiker, de controls van de audio zichtbaar zijn, en als er wel JS te gebruiken is dat er dan custom controls zijn

-   js carousel naar css scroll-snap carousel. snapte er geen hol van maar het is gelukt alleen nog niet met pijltjes die klikbaar zijn dus het is niet toegankelijk. NOG niet toegankelijk.

![](./proces/img/5/code-10.png)
![](./proces/img/5/code-11.png)
![](./proces/img/5/code-12.png)
![](./proces/img/5/code-13.png)
![](./proces/img/5/code-14.png)

-   als er een nummer speelt en je switcht naar een ander album, dan blijft de playing animatie wel maar stopt de muziek, waardoor de toggle niet lekker werkt. wordt ff geparkeerd want geen prio. net als de scrollbar die niet weg wil.

<a name="12feb"/>

#### Maandag 12 feb

-   ik wilde een soort navbar maken voor accessibility alleen dit zorgde ervoor dat de hele pagina versprong, kreeg het niet gefikst dus heb alle album covers in een button gegooid waardoor je er nu wel doorheen kunt tabben

![](./proces/img/6/code.png)
![](./proces/img/6/code-2.png)
![](./proces/img/6/code-3.png)

<a name="13feb"/>

#### Dinsdag 13 feb

-   Vandaag heb ik enkel aan de team app gewerkt.

<a name="14feb"/>

#### Woensdag 14 feb

-   Op verzoek van docent heb ik de animatie van de platenspeler duidelijker gemaakt. Dit was lastig omdat ik een soort wrapper moest maken voor het vinyl (omdat ik geen 2 animaties door elkaar heen kon gebruiken op hetzelfde object) waardoor alles een soort van stuk ging, en rekening moest houden met responsiveness. For some reason was ook het middenstukje waar de artiest opstaat insane lastig om mee te scalen, waardoor ik ipv width een transform: scale heb toegepast in de animatie. Ik heb het nog aan chatGPT gevraagd maar die kwam met een achterlijke oplossing die ik niet gebruikt heb.

![](./proces/img/7/code.png)
![](./proces/img/7/code-2.png)
![](./proces/img/7/code-3.png)
![](./proces/img/7/code-4.png)
![](./proces/img/7/code-5.png)
![](./proces/img/7/code-6.png)

## Source List

### Code

https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior

https://stackoverflow.com/questions/42261524/how-to-window-scrollto-with-a-smooth-effect

https://stackoverflow.com/questions/16290943/css-relative-right-or-bottom-almost-never-work

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

https://www.w3schools.com/cssref/pr_import_rule.php

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Basic_concepts

https://stackoverflow.com/questions/74911242/i-want-to-have-3-items-on-the-right-and-1-item-on-the-left-using-flexbox

https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin

https://css-tricks.com/how-to-get-handwriting-animation-with-irregular-svg-strokes/

https://css-tricks.com/almanac/properties/s/stroke/

https://github.com/hakimel/reveal.js/issues/2478

https://www.tpgi.com/using-aria-enhance-svg-accessibility/

https://developer.mozilla.org/en-US/docs/Web/CSS/:has

https://salesforce.stackexchange.com/questions/367947/why-does-the-radio-button-has-checked-false-but-is-selected-on-screen

https://stackoverflow.com/questions/20053156/align-self-property-in-flexbox-is-not-working

https://www.w3schools.com/graphics/svg_stroking.asp

https://codepen.io/designersnest/pen/gOaXPbr?editors=1100

https://css-tricks.com/css-only-carousel/

https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type

https://codepen.io/Schepp/pen/WNbQByE?editors=1000

https://stackoverflow.com/questions/50146957/how-to-customize-html5-audio-controls-without-using-javascript-pure-css

https://stackoverflow.com/questions/16670931/hide-scroll-bar-but-while-still-being-able-to-scroll

https://stackoverflow.com/questions/11723417/break-element-out-of-container

https://moderncss.dev/pure-css-custom-styled-radio-buttons/

### img

https://www.transparenttextures.com/wood-pattern.html

https://www.transparenttextures.com/cardboard.html

https://www.cmd-amsterdam.nl/wp-content/uploads/2013/12/cmd_icon_pencilcross.png

https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AOcticons-mark-github.svg&psig=AOvVaw06ECoTJiUDFduRAz9cdRev&ust=1707507227298000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDd15--nIQDFQAAAAAdAAAAABAE

https://www.magicpattern.design/tools/css-backgrounds

### api

https://www.theaudiodb.com/api_guide.php
