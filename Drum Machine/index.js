function play(str){
    console.log(str, " String Passed");
    var audio = document.getElementById(str);

    let displayText = document.getElementById("display");

    if(str === "Q" || str === "q"){str
        displayText.innerHTML = "Snare Drum1";
    }else if(str === "W" || str === "w"){
        displayText.innerHTML = "War Sound1";
    }else if(str === "E" || str === "e"){
        displayText.innerHTML = "Snare Drum2";
    }else if(str === "A" || str === "a"){
        displayText.innerHTML = "War Sound2";
    }else if(str === "S" || str === "s"){
        displayText.innerHTML = "Snare Drum3";
    }else if(str === "D" || str === "d"){
        displayText.innerHTML = "War Sound3";
    }else if(str === "Z" || str === "z"){
        displayText.innerHTML = "Snare Drum4";
    }else if(str === "X" || str === "x"){
        displayText.innerHTML = "War Sound4";
    }else if(str === "c" || str === "C"){
        displayText.innerHTML = "Snare Drum5";
    }

    audio.play();
}

window.document.onkeyup = function(event) {
    let keyStroke = event.key;
    if(keyStroke === "Q" || keyStroke === "q"){
        play("Q");
    }else if(keyStroke === "W" || keyStroke === "w"){
        play("W");
    }else if(keyStroke === "E" || keyStroke === "e"){
        play("E");
    }else if(keyStroke === "A" || keyStroke === "a"){
        play("A");
    }else if(keyStroke === "S" || keyStroke === "s"){
        play("S");
    }else if(keyStroke === "D" || keyStroke === "d"){
        play("D");
    }else if(keyStroke === "Z" || keyStroke === "z"){
        play("Z");
    }else if(keyStroke === "X" || keyStroke === "x"){
        play("X");
    }else if(keyStroke === "c" || keyStroke === "C"){
        play("C");
    }
}