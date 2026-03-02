/* eslint-disable */

let idade: number = 1; // Qualquer valor numérico, seja inteiro, decimal, hexadecimal, octal ou binário.
let nome: string = 'hello'; // Qualquer string usando aspas simples, duplas.
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('simbolo'); // Qualquer valor único e imutável, criado usando a função Symbol().
let bigInt: bigint = 9007199254740991n; // Qualquer número inteiro grande, representado com o sufixo 'n'.

// Arrays
let arraydeNumeros: Array<number> = [1, 2, 3]; // Array de números usando a sintaxe genérica.
let arraydeNumeros2: number[] = [1, 2, 3]; // Array de números usando a sintaxe de colchetes.
let arraydeStrings: Array<string> = ['a', 'b', 'c']; // Array de strings usando a sintaxe genérica.
let arraydeStrings2: string[] = ['a', 'b', 'c']; // Array de strings usando a sintaxe de colchetes.

// Objetos
let pessoa: { nome: string; idade: number, adulto?: boolean } = {
  nome: 'Alice',
  idade: 30,
  adulto: true}; // Objeto com propriedades nome, idade e adulto(Opcional).

// Funções
function soma(a: number, b: number): number {
  return a + b; // Função que recebe dois números e retorna um número.
}

const soma2: (a: number, b: number) => number = (a, b) => a + b; // Função usando a sintaxe de expressão de função.
