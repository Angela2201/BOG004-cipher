const cipher = {
  encode, decode 
}
// Recibe los valores del input
function encode(saltos, cifrado) {
  console.log(typeof saltos);
  // Validar datos
  if (typeof cifrado !== 'string' || cifrado.length === 0){
    throw new TypeError("Por favor ingresa un texto");
  }
  if (typeof saltos !== 'number' || saltos.length === 0){
    throw new TypeError("Por favor elige un número");
  } console.log("Falta Número")
  // variable que almacenará el cifrado
  let resultado = "";
  // abecedario que se va a utilizar
  let abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Sacar el residuo a los saltos en caso de ser negativo
  saltos = ((saltos % 26) + 26) % 26;

  if (cifrado) {
    // Cuenta la longitud del mensaje de Cifrado
    for (let i = 0; i < cifrado.length; i++) {
      // Verifica que la letra se encuentre en el abecedario
      if (abecedario.indexOf(cifrado[i]) != -1) {
        // Variable que guarda la posición de la letra
        // Le suma la letra encontrada a los Saltos para después sacarle el residuo
        let posicion = (abecedario.indexOf(cifrado[i]) + saltos) % 26;
        // Concatenar al resultado
        resultado += abecedario[posicion];
      } else {
        resultado += cifrado[i];
      }
    }
  }
  console.log(resultado)
  return resultado;
}
//Recibe los valores del input
function decode(saltos, cifrado) {
  // Validar datos
  if (typeof cifrado !== 'string' || cifrado.length === 0){
    throw TypeError("Por favor ingresa un texto");
  }
  if (typeof saltos !== 'number' || saltos.length === 0){
    throw TypeError("Por favor elige un número")
  }
  //Variable que elmacenará el descifrado
  let resultadoDes = "";
  //Abecedario
  let abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //Sacar el residuo
  saltos = ((saltos % 26) - 26) % 26;

  if (cifrado) {
    // Cuenta la longitud del mensaje de Cifrado
    for (let i = 0; i < cifrado.length; i++) {
      // Verifica que la letra se encuentre en el abecedario
      if (abecedario.indexOf(cifrado[i]) != -1) {
        // Variable que guarda la posición de la letra
        // Le suma la letra encontrada a los Saltos para después sacarle el residuo
        let posicion = (abecedario.indexOf(cifrado[i]) - saltos) % 26;
        // Concatenar al resultado
        resultadoDes += abecedario[posicion];
      } else {
        resultadoDes += cifrado[i];
      }
    }
  }
  console.log(resultadoDes)
  return resultadoDes;
}
export default cipher;
