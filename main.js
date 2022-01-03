const sounds = {
    'Q': document.getElementById('Q'),
    'W': document.getElementById('W'),
    'E': document.getElementById('E'),
    'A': document.getElementById('A'),
    'S': document.getElementById('S'),
    'D': document.getElementById('D'),
    'Z': document.getElementById('Z'),
    'X': document.getElementById('X'),
    'C': document.getElementById('C')
};

var leyenda = document.getElementById('display');

const names = {
    'Q': 'Achievement win drum sounding',
    'W': 'Deep cinematic subtle drum impact sounding',
    'E': 'Drum deep impact sounding',
    'A': 'Drum hit with eco sounding',
    'S': 'Drum roll sounding',
    'D': 'Horror deep drum heartbeat sounding',
    'Z': 'Horror tunnel drum sounding',
    'X': 'Metal hit drum sounding',
    'C': 'Ominous drums sounding'
}

var leyenda = document.getElementById('display');

function playSounds(letter){
            if(letter === 'Q'){
                sounds.Q.play();
                leyenda.innerText = names.Q;
            } else if(letter === 'W'){
                sounds.W.play();
                leyenda.innerText = names.W;
            } else if(letter === 'E'){
                sounds.E.play();
                leyenda.innerText = names.E;
            } else if(letter === 'A'){
                sounds.A.play();
                leyenda.innerText = names.A;
            } else if(letter === 'S'){
                sounds.S.play();
                leyenda.innerText = names.S;
            } else if(letter === 'D'){
                sounds.D.play();
                leyenda.innerText = names.D;
            } else if(letter === 'Z'){
                sounds.Z.play();
                leyenda.innerText = names.Z;
            } else if(letter === 'X'){
                sounds.X.play();
                leyenda.innerText = names.X;
            } else if(letter === 'C'){
                sounds.C.play();
                leyenda.innerText = names.C;
            }
}

document.addEventListener('keydown', function(e) {
    var letra = event.which || event.keyCode;

    letra = String.fromCharCode(letra);

    if(letra === 'Q' || letra === 'q'){
        sounds.Q.play();
        leyenda.innerText = names.Q;
    } else if(letra === 'W' || letra === 'w'){
        sounds.W.play();
        leyenda.innerText = names.W;
    } else if(letra === 'E' || letra === 'e'){
        sounds.E.play();
        leyenda.innerText = names.E;
    } else if(letra === 'A' || letra === 'a'){
        sounds.A.play();
        leyenda.innerText = names.A;
    } else if(letra === 'S' || letra === 's'){
        sounds.S.play();
        leyenda.innerText = names.S;
    } else if(letra === 'D' || letra === 'd'){
        sounds.D.play();
        leyenda.innerText = names.D;
    } else if(letra === 'Z' || letra === 'z'){
        sounds.Z.play();
        leyenda.innerText = names.Z;
    } else if(letra === 'X' || letra === 'x'){
        sounds.X.play();
        leyenda.innerText = names.X;
    } else if(letra === 'C' || letra === 'c'){
        sounds.C.play();
        leyenda.innerText = names.C;
    }
})

