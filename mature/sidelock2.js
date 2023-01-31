// ==UserScript==
// @name         Sidelock2
// @namespace    https://soundgasm.net
// @version      0.1
// @description  allows for downloading of audios from soundgasm
// @author       anonfoxer
// @match        https://soundgasm.net/*
// @icon         https://www.google.com/s2/favicons?domain=soundgasm.net
// @grant        none
// ==/UserScript==

var thisButton = document.createElement ('div');
thisButton.innerHTML = '<button id="dlButton" type="button">'
                + 'Download Audio</button>'
                ;
thisButton.setAttribute ('id', 'myContainer');
document.body.appendChild (thisButton);

document.getElementById ("dlButton").addEventListener (
    "click", getAudio, false
);

function getAudio (zEvent) {
    var audio = document.getElementsByTagName('audio')[0].getAttribute('src');
    window.open(audio);
}
