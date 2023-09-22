import Archetype, { Mage } from './Archetypes';
import { Race } from './Battle';
import Energy from './Energy';
import Fighter from './Fighter';
import { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private name: string;
  private race: Race;
  private archetype: Archetype;
  private maxLifePoints: number;
  private lifePoints: number;
  private strength: number;
  private defense: number;
  private dexterity: number;
  private energy: Energy;

  constructor(name: string) {
    this.name = name;
    this.dexterity = getRandomInt(1, 10);
    this.race = new Elf(name, this.dexterity);
    this.archetype = new Mage(name);
    this.maxLifePoints = this.race.maxLifePoints / 2;
    this.lifePoints = this.maxLifePoints;
    this.strength = getRandomInt(1, 10);
    this.defense = getRandomInt(1, 10);
    this.energy = {
      type_: this.archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }
}