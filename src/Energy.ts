export type EnergyType = 'mana' | 'stamina';

export default interface Energy {
  type_: EnergyType;
  amount: number;
}

// a interface é um contrato a ser seguido
// é uma abstração ainda maior

// a classe que herdar a interface é obrigada a 
// implementar os métodos da interface

// quase uma regra de negócio, um contrato