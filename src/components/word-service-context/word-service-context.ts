import React from 'react';
import { WordsService } from '../../service';

const wordsService = new WordsService();
export const Context = React.createContext(wordsService);
