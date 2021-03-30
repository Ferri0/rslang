import React, { useState, useEffect } from 'react';
import { useTypedSelector } from '../../../hooks';
import { Words } from '../../../types';
import { DialogModal } from '../../ChooseLevel';
import { Intro } from './Intro';

export const Savanna = () => {
  const { words } = useTypedSelector((state) => state.groupOfWords);

  if (words.length === 0) {
    return <DialogModal />;
  }

  return <Intro />;
};
