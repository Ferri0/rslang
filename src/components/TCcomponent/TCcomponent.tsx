import React from 'react';

interface Num {
  num: number;
}

const TCcomponent = ({ num }: Num) => {
  console.log(num);

  return <div>number is: {num}</div>;
};

export { TCcomponent };
