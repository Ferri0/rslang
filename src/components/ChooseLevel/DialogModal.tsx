import React, { useState } from 'react';
import { Form } from './Form';

import style from './ChooseLevel.module.scss';

export const DialogModal: React.FC = () => {
  const [open, setOpen] = useState(true);
  return (
    <dialog className={style.dialog_modal} open={open}>
      <h2 className={style.title}>Choose group of words</h2>
      <Form setter={setOpen} />
    </dialog>
  );
};
