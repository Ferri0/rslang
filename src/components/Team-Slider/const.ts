import { teamInfo } from './team-info';

interface CoordObj {
  top: number;
  right: number;
}

export const arr: Array<string> = [];
export const coord: Array<CoordObj> = [];

const circusRadius = 150;
const halfWidthMiniPhoto = 25;
let angle = 0;
export const angleH = -(360 / 5); // 360 dergrees div 5 team members

for (let i = 0; i < teamInfo.length; i += 1) {
  if (i === 0) arr[i] = 'active';
  else arr[i] = '';

  const y = circusRadius * Math.sin((angle * Math.PI) / 180);
  const top = -y - halfWidthMiniPhoto + circusRadius;
  const x = circusRadius * Math.cos((angle * Math.PI) / 180);
  const right = -halfWidthMiniPhoto - x + circusRadius;
  const el = {
    top: top,
    right: right,
  };
  coord[i] = el;
  angle += angleH;
}

console.log(coord);
