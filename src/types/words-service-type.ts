import { Word } from './words-type';

export interface ServiceWordsType {
  apiBaseUrl: string;
  apiWords(groupe: string, page: string): string;
  getResource(url: string): Promise<Response>;
  getWords(group: string, page?: string): Promise<Word[]>;
  getSound(path: string): Promise<Response>;
}
