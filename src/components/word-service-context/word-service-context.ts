import React from 'react';
import { WordsService } from '../../services';

const wordsService = new WordsService();
export const Context = React.createContext(wordsService);
