# Proces WAFS

Welkom!!! Bij dit prachtige procesboek!!!!!!!! Let's dive right in :)

## Table of Contents

[Maandag 5 feb](#5feb)  
[Dinsdag 6 feb](#6feb)  
[Woensdag 7 feb](#7feb)  
[Donderdag 8 feb](#8feb)  
[Vrijdag 9 feb](#9feb)  
[Maandag 12 feb](#12feb)

<a name="5feb"/>

## Maandag 5 feb

Ideeën:

-   GBA of NDS, met een pokemon look & feel (pixel art) en daarin een soort game, een backpack met items, of een pokedex met dingen die mij beschrijven
-   Windows XP simulation met allemaal icons. Ik vond dit idee stom toen ik er te lang over na ging denken. Icons waren wel cool (die kan je dus allemaal downloaden in een zipje!!!!! wauw!)
-   Hierna heb ik opgegeven en ben ik naar huis gegaan!!!!!!!! Morgen nieuwe kansen <3

![](./img/1/note.jpeg)
![](./img/1/note2.JPG)

<a name="6feb"/>

## Dinsdag 6 feb

-   Oke nieuwe dag nieuw concept: een turntable met mijn favoriete albumpies ernaast, en dan iets van een titel en artiest ernaast. Dat moet allemaal dynamisch veranderen. Geen idee hoe.
-   Uiteindelijk is het concept omgevormd naar een tafel waar de platenspeler op staat, samen met een paspoortje en een landkaart. Het paspoort moet dan persoonlijke info over mij weergeven & de landkaart de weeklynerd talks.
-   Eerste fetch gedaan!!! Was super leuk would recommend 10/10

![](./img/2/note.JPG)
![](./img/2/note2.JPG)

<a name="7feb"/>

## Woensdag 7 feb

-   ik heb een paspoortje toegevoegd aan de tafel, als je erop klikt komt de content in beeld. Ik zat nogal te struggelen met hoe ik dit in een soort paspoort layout moest krijgen, want ik wilde eigenlijk een ul met li items gebruiken. Dit kreeg ik echter met geen mogelijkheid goed voor elkaar, dus heb ik alles toch omgegooid naar div’jes en heb ik 2 sections gemaakt waarvan de parent een display: flex kreeg.

![](./img/3/code.png)
![](./img/3/code-2.png)
![](./img/3/code-3.png)

-   ik heb mijn concept nog een keer nagelopen en nog een soort final sketch gemaakt:

![](./img/3/note.JPG)

<a name="8feb"/>

## Donderdag 8 feb

-   weeklynerd notebook btn gemaakt (toch geen landkaart want i have a life)
-   het aanpassen van de api data werkt niet meer als ik de images kleiner maak dus ik moet ff opnieuw beginnen. ik deed het dus eerst zo op basis van de scrollposition, maar dat werkte niet meer als de items kleiner werden (duh). nu voeg ik dus de ‘active’ class toe op basis van de clicks op de up- en down buttons. hier checkt hij dus elke keer als er geklikt wordt wat de currentActiveIndex moet worden.

![](./img/4/code-1.png)
![](./img/4/code-2.png)

-   Killian Valkhof heeft gister gepraat over carousels en hoe je deze met pure html en css kunt maken, ik heb dit tnt alleen nog in js gedaan. Dit wil ik dus nog aan gaan passen, in het kader van ‘make it work, make it good, make it pretty’.

![](./img/4/code-3.png)

-   einde vd dag progress

![](./img/4/code-4.png)

<a name="9feb"/>

## Vrijdag 9 feb

<a name="12feb"/>

-   js carousel naar css scroll-snap carousel. hoofdpijn! maar gelukt.
-   audio vanuit apple music geprobeerd, was tantoe lelijk, uiteindelijk gekozen voor mp3'tjes die worden ingeladen met controls die worden veranderd als JS actief is bij de gebruiker (door domcontentloaded).
-   ik weet niet hoe ik de scrollbar weg krijg ???
-   als er een nummer speelt en je switcht naar een ander album, dan blijft de playing animatie wel maar stopt de muziek, waardoor de toggle niet lekker werkt. wordt ff geparkeerd want geen prio.

## Maandag 12 feb
