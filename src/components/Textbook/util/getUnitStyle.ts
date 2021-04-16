import u1s from '../unitStyles/Unit1.module.scss';
import u2s from '../unitStyles/Unit2.module.scss';
import u3s from '../unitStyles/Unit3.module.scss';
import u4s from '../unitStyles/Unit4.module.scss';
import u5s from '../unitStyles/Unit5.module.scss';
import u6s from '../unitStyles/Unit6.module.scss';

export function getUnitStyle(unit: number): { [className: string]: string } {
  switch (unit) {
    case 0:
      return u1s;
      break;
    case 1:
      return u2s;
      break;
    case 2:
      return u3s;
      break;
    case 3:
      return u4s;
      break;
    case 4:
      return u5s;
      break;
    case 5:
      return u6s;
      break;

    default:
      throw new Error('Wrong unit num passed to getUnitStyle function');
      break;
  }
}
