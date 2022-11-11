/**
 * Muestra una matriz correctamente
 * @param {Array} matriz a mostrar
 */
 function verMatriz(matriz){
    let matrizString = ``;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
           matrizString += `\t[${matriz[i][j]}]`
        }
        matrizString += "\n\n";
    }
    console.log(matrizString);
}

const taTeTi1 = [
    [" ","O","X"],
    ["O","X","O"],
    ["X","X","O"]
]

const taTeTi2 = [
    [" ","X","O"],
    ["X","O","X"],
    ["O","O","X"]
]

verMatriz(taTeTi2);

/*
Desarrollar un algoritmo para evaluar
el estado del juego actual (SOLO cuando se gana con linea diagonal)
El programa debe mencionar quien gano
Tiene que funcionar con ambas matrices
 */
let jugadorX = 4;
let jugadorO = 4;

function comprobarGanador(matriz){
    
    verificarDiagonal(matriz,matriz[1][1])
    
    if(jugadorX < jugadorO){
        console.log("ganó el jugador O")
    }
    else if(jugadorO < jugadorX){
        console.log("ganó el jugador X")
    }
}

function verificarDiagonal(matriz,centroMatriz){

    for(i=0; i < matriz.length; i = i+2){
        for(k=0; k < matriz.length ; k= k+2){
            if(matriz[i][k] == centroMatriz && matriz[i][k] == "X"){
                    jugadorO = jugadorO - 1 
            }
            else if(matriz[i][k] == centroMatriz && matriz[i][k] == "O"){
                    jugadorX = jugadorX - 1
            }
        }
    }
}

comprobarGanador(taTeTi2);

