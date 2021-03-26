import u1s from '../unitStyles/Unit1.module.scss';
import u2s from '../unitStyles/Unit2.module.scss';

export function getUnitStyle(unit: number) {
  switch (unit) {
    case 1:
      return u1s;
      break;
    case 2:
      return u2s;
      break;

    default:
      throw new Error('Wrong unit num passed to getUnitStyle function');
      break;
  }
}
