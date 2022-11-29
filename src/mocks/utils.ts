import { APIModel } from './../apis/apis';
import { JSONFiles } from './apis';

export const getMockData = (apiKey: keyof APIModel) => {
  const file = JSONFiles[apiKey];
  return import(`../mocks/${file}`);
};
