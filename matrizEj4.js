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

verMatriz(taTeTi1);

/*
Desarrollar un algoritmo para evaluar
el estado del juego actual (SOLO cuando se gana con linea diagonal)
El programa debe mencionar quien gano
Tiene que funcionar con ambas matrices
 */