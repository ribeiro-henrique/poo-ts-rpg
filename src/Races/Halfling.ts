import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static raceInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.raceInstance += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return Halfling.raceInstance;
  }
}