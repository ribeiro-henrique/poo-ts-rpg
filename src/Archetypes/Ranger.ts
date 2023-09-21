import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static classInstace = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.classInstace += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static override createdArchetypeInstances(): number {
    return Ranger.classInstace;
  }
}