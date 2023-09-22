import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _ally: Fighter;
  private _enemy: Fighter;
  
  constructor(player: Fighter, player2: Fighter) {
    super(player);
    this._ally = player;
    this._enemy = player2;
  }

  override fight(): number {
    // return this.player.lifePoints === -1 ? -1 : 1;
    let result: number;

    while (this._ally.lifePoints !== -1 && this._enemy.lifePoints !== -1) {
      this._ally.attack(this._enemy);
      this._enemy.attack(this._ally);
    }
    if (this._ally.lifePoints !== -1) {
      result = 1;
    } else {
      result = -1;
    }

    return result;
  }
}