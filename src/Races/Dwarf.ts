import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static raceInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.raceInstance += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return Dwarf.raceInstance;
  }
}