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

const mensajeOculto = [
    [72,101,108,108,111],
    [42,44,43,46,39],
    [87,111,114,108,100],
    [42,58,41,42,42]
];

verMatriz(mensajeOculto);

//convertir cada elemento en la matriz a su valor de tipo caracter
//mostrar la matriz obtenida

let matrizResultante = [];
let vectorFila =[]

function cambiarALetras(matriz){
    matriz.forEach(fila => {
        fila.forEach(colElemento => {
            //colElemento = String.fromCharCode(colElemento)
            vectorFila.push(String.fromCharCode(colElemento))
        });
        matrizResultante.push(vectorFila)
        vectorFila = [];
    });;
}

cambiarALetras(mensajeOculto)
verMatriz(matrizResultante)