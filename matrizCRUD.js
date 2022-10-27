

//CREATE
let unVector = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

//READ

//primer version para mostrar una matriz
/* for (let i = 0; i < unVector.length; i++) {
    for (let j = 0; j < unVector[i].length; j++) {
        console.log("elemento de la matriz",unVector[i][j]);
    }
} */

//mostrar solo una fila (3º)
/* for (let i = 0; i < unVector[2].length; i++) {
    console.log( unVector[2][i]);
} */

/* console.log( unVector[2][1] ); */

//  \n -> salto de linea / enter
// \t -> tab

/**
 * Muestra una matriz
 * @param {Array} matriz a mostrar
 */
function mostrarMatriz(matriz){
    let matrizString = "\n";
    for (let i = 0; i < unVector.length; i++) {
        for (let j = 0; j < unVector[i].length; j++) {
            matrizString += `\t[${unVector[i][j]}] `;
        }
        matrizString += "\n\n";
    }
    console.log(matrizString);
}

/* mostrarMatriz(unVector); */

//UPDATE - Actualizar
unVector[1][1] = 100;

unVector[2][1] = 0;

/* mostrarMatriz(unVector); */

//DELETE

/* unVector[1].splice(1, 1, 77);
mostrarMatriz(unVector); */
/* unVector[1].pop();
mostrarMatriz(unVector); */


//CREATE - AGREGAR LUEGO

unVector[2].push("Hola!");
mostrarMatriz(unVector);










//READ/LEER para un vector
/* for (let i = 0; i < unVector.length; i++) {
    console.log(unVector[i]);
} */