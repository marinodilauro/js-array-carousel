# Readme
## Carosello Mono Array

Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

***

### Steps

- Creo una variabile per la lista dei nomi delle immagini
- Creo una variabile per l'immagine visualizzata a schermo
- Creo un ciclo for iterare fra tutte le immagini della lista
- Creo una variabile per gli elementi della pagina che faranno scorrere il carosello
- Gestione degli elementi della pagina che faranno scorrere il carosello 
  - Passa all'immagine succesiva/precedente
  - Assegno la classe per definire l'immagine visualizzata a schermo
  - Creo una variabile per la lista di elementi HTML img
  - Assegno come indice della lista di elementi HTML img il valore della variabile per l'immagine visualizzata a schermo le assegno la classe per definire l'immagine visualizzata a schermo
  - SE siamo all'ultima/alla prima immagine della lista:
    - Assegnamo alla variabile per l'immagine visualizzata a schermo il valore del primo/ultimo indice della lista ddei nomi delle immagini

   

***

### Tools

- Variabili, costanti e liste
- console.log() per stampare dati in console
- For loop
- Istruzioni condizionali (if/else if/else)
- element.insertAdjacentHTML per inserire elementi HTML tramite JS
- classList.add() per aggiungere classi agli elementi HTML tramite JS
- document.getElementBy/.queryselector selezionare gli elementi HTML tramite JS
