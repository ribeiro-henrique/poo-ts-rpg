import Race from './Race';

// ao extender de Race, eu herdo suas características
export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static raceInstance = 0; // quantidade de anões criados, iniciando em zero

  // inicio meus atributos no construtor,
  // herdo name e destreza de Race
  // aponto para isso com o super
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.raceInstance += 1; // sempre que eu instanciar um novo objeto anão, incremento aqui
  }

  // implementação do método abstrato que herdei
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  // implementação do método statico que herdei,
  // ademais, uso o override para sobrescrever o método
  // que agora não retorna um erro, mas sim quantos anões
  // foram criados
  static override createdRacesInstances(): number {
    return Dwarf.raceInstance;
  }
}