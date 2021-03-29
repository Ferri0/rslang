import { Words } from './words-type';

export interface ServiceWordsType {
  apiBaseUrl: string;
  apiWords(groupe: number, page: number): string;
  getResource(url: string): Promise<Response>;
  getWords(group: number, page: number): Promise<Words>;
  getSound(path: string): Promise<Response>;
}
