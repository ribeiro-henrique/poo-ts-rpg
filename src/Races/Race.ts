export default abstract class Race {
  private name: string;
  private dexterity: number;

  constructor(name: string, dexterity: number) {
    this.name = name;
    this.dexterity = dexterity;
  }

  getName() {
    return this.name;
  }

  getDexterity() {
    return this.dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract maxLifePoints(): number;
}