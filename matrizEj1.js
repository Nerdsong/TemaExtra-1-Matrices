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

const matrizBinaria = [
    [0,0,0,0],
    [0,0,0,1],
    [0,1,1,1],
    [1,1,1,1]
]

verMatriz(matrizBinaria);

// Cambiar los 1 por 0 y viceversa, finalmente mostrar la matriz