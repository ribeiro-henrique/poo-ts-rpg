export default abstract class Race {
  private _name: string;
  private _dexterity: number;

  // constructor básico, iniciando meus atributos
  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  // métodos getter, para visualização
  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }
  
  // método statico não precisa de atributos,
  // é tbm chamado de método de classe,
  // pois pode ser chamado diretamente na classe:
  // Race.createdRacesInstances;
  
  // o throwing é uma garantia de que terei que 
  // implementar o retorno do método nas class filhas
  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  // método abstrato, ele será implementado de fato
  // nas classes que forem herdar Race
  // aqui ele só é declarado
  abstract get maxLifePoints(): number;
}

// lembrando a fórmula clássica de uma classe
// estruturada da seguinte forma:
// atributos
// construtor
// e métodos