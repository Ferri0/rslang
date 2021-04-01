import { Words } from '../types';

export const shuffle = (arr: Words): Words => [
  ...arr.sort(() => Math.random() - 0.5),
];
