import { Word } from './words-type';

export interface ServiceWordsType {
  apiBaseUrl: string;
  apiWords(groupe: number, page: number): string;
  getResource(url: string): Promise<Response>;
  getWords(group: number, page: number): Promise<Word[]>;
  getSound(path: string): Promise<Response>;
}
