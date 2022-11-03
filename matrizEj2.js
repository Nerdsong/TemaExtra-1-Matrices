/**
 * Muestra una matriz correctamente
 * @param {Array} matriz a mostrar
 */
function verMatriz(matriz) {
    let matrizString = ``;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            matrizString += `\t[${matriz[i][j]}]`
        }
        matrizString += "\n\n";
    }
    console.log(matrizString);
}

const matrizNumeros = [
    [2, 2, 55, 10],
    [3, 40, 0, 1],
    [7, 1, 31, 14],
    [1, 9, 21, 1]
]

verMatriz(matrizNumeros);

//para cada final calcular la sumatoria de sus elementos
//mostrar el resultado obtenido

function sumatoriaDeFilas(matriz) {
    let filasSumatoria = []
    let colSumatoria = 0

    matriz.forEach(fila => {
        fila.forEach(colElemento => {
            colSumatoria += colElemento
        });
        filasSumatoria.push(colSumatoria)
        colSumatoria = 0;
    });;
    
    console.log(filasSumatoria)
}

sumatoriaDeFilas(matrizNumeros)
