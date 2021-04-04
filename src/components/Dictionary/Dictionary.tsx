import * as React from 'react';
import style from './Dictionary.module.scss';
import { getUnitStyle } from './util/getUnitStyle';

enum Category {
  'learning',
  'difficult',
  'deleted',
}

export interface DictionaryProps {
  type: 'learning' | 'difficult' | 'deleted';
}

export const Dictionary: React.FC<DictionaryProps> = ({ type }) => {
  const unitStyle = getUnitStyle(Category[type]);

  return (
    <div className={[style.root, unitStyle.bg].join(' ')}>
      Dictionary {type}
    </div>
  );
};
