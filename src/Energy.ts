export type EnergyType = 'mana' | 'stamina';

export default interface Energy {
  type_: EnergyType;
  amount: number;
}

// a interface é um contrato a ser seguido
// não contém métodos e nem seta atributos
// é uma abstração ainda maior, readOnly