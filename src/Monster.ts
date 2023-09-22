import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor(lifePoints: number, strength: number) {
    this._lifePoints = lifePoints || 85;
    this._strength = strength || 63;
  }

  get lifePoints(): number { return this._lifePoints; }

  get strength(): number { return this._strength; }

  receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;

    if (this._lifePoints === 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}