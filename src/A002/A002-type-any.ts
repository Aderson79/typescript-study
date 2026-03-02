// Deve-se evitar o uso do tipo any, pois ele desativa a verificação de tipos do TypeScript.
// O tipo any é um tipo especial que pode representar qualquer valor, e seu uso pode levar a erros em tempo de execução,

function showMessage(message: any) {
  console.log(message); // A função aceita qualquer tipo de argumento e retorna qualquer tipo de valor.
}

console.log(showMessage('Hello, World!')); // Imprime 'Hello, World!' no console.
console.log(showMessage(123));
console.log(showMessage([1, 2, 3]));
