// ==UserScript==
// @name         Novicane - SPNATI Cheat
// @namespace    https://www.github.com/anonfoxer
// @version      1.0.0
// @description  Collection of cheats for the browser game SPNATI, put into a large userscript for ease of use
// @author       anonfoxer
// @match        https://spnati.net/*
// @grant        none
// @license      MIT
// ==/UserScript==


/* Making the buttons and appending them all
just underneath the name bubble of each character.
Kinda roundabout but eh. */

console.log("N O V I C A N E _ L O A D I N G . . .");

//cheat name button because flair is important.
var cheat = document.createElement("button");
cheat.innerHTML = "Novicane v1.0.0";
var gameVers = document.getElementById("title-version-button");
try {
    gameVers.appendChild(cheat);
}
catch(e) {
console.log(e);
}

//win hand button
var winHandButton = document.createElement("button");
winHandButton.innerHTML = "Win Hand";
document.getElementsByClassName("optional-bordered player-card-area")[0].appendChild(winHandButton);

//info button
var splashButton = document.createElement("button");
splashButton.innerHTML = "Info";
document.getElementsByClassName("optional-bordered player-card-area")[0].appendChild(splashButton);

//instant epilogue button
var instantEpilogueButton = document.createElement("button");
instantEpilogueButton.innerHTML = "Epilogue";
document.getElementsByClassName("optional-bordered player-card-area")[0].appendChild(instantEpilogueButton);


//splash listener
splashButton.addEventListener ("click", function() {
    alert("Novicane v1.0.0 by anonfoxer");
    alert("Changes!\n-Removed debug mode button (doesnt work online)\n-Added cheat splash and information.\n-Updated button appending to make buttons appear.\n-Added instant epilogue button.\n\n\nUsage:\nClick win hand at any time to win the hand instantly.\nClick Epilogue to immediately jump to the epilogues that are available with the characters you\'ve been playing against.\nClick info to show this dialogue.");
});

//win hand listener
winHandButton.addEventListener ("click", function() {
try {
    console.log("Novicane >> Giving player winning hand");
    players[0].hand.cards = [ 14, 13, 12, 11, 10 ].map(function(n) { return new Card(0 - 1, n); });
}
    catch (e) {
    console.log("Novicane >> An error occurred when trying to force a winning hand. Error:");
    console.log(e);
    }
});



instantEpilogueButton.addEventListener ("click", function() {
    console.log("Novicane >> Forcing epilogue modal...");
    doEpilogueModal();
});

console.log("Novicane >> Loaded and functioning properly.");
