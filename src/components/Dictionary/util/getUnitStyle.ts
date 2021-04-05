import { CategoryType } from '../../../types/words';
import u1s from '../unitStyles/Unit1.module.scss';
import u2s from '../unitStyles/Unit2.module.scss';
import u3s from '../unitStyles/Unit3.module.scss';

export function getUnitStyle(unit: CategoryType) {
  switch (unit) {
    case 'learning':
      return u1s;
    case 'difficult':
      return u2s;
    case 'deleted':
      return u3s;

    default:
      throw new Error('Wrong unit num passed to getUnitStyle function');
  }
}
