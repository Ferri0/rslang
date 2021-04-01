export interface ServiceWordsType {
  apiBaseUrl: string;
  apiWords(groupe: number, page: number): string;
  getResource(url: string): Promise<Response>;
  getWords(): Promise<Response>;
  getSound(path: string): Promise<Response>;
}
