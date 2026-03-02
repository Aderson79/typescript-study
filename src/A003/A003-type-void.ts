function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

semRetorno('Olá', 'mundo!');

const pessoa = {
  nome: 'Alice',
  Sobrenome: `Smith`,

  exibirNome(): void {
    console.log(this.nome + ' ' + this.Sobrenome);
  },
};

export { pessoa };
