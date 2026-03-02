const objeto: {
  readonly chaveA: string; // Propriedade obrigatoria somente leitura
  chaveB: number; // Propriedade obrigatória
  chaveC?: boolean; // Propriedade opcional
  [key: string]: unknown; // Dificilmente usado
} = {
  chaveA: 'Valor A',
  chaveB: 42,
};

objeto.chaveB = 100; // Propriedade pode ser modificada
objeto.chaveC = true; // Propriedade opcional
objeto.chaveD = 'Nova Chave'; // Propriedade adicional
