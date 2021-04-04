import u1s from '../unitStyles/Unit1.module.scss';
import u2s from '../unitStyles/Unit2.module.scss';
import u3s from '../unitStyles/Unit3.module.scss';

export function getUnitStyle(unit: number) {
  switch (unit) {
    case 0:
      return u1s;
    case 1:
      return u2s;
    case 2:
      return u3s;

    default:
      throw new Error('Wrong unit num passed to getUnitStyle function');
  }
}
