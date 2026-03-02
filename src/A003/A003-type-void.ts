/* O tipo void é usado para indicar que uma função não retorna um valor.
Ele é útil para funções que realizam uma ação, mas não precisam retornar nada para o chamador.*/

// Exemplo de função que retorna void
function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

semRetorno('Olá', 'mundo!');

const pessoa = {
  nome: 'Alice',
  Sobrenome: `Smith`,

  // Método que retorna void
  exibirNome(): void {
    console.log(this.nome + ' ' + this.Sobrenome);
  },
};

export { pessoa };
