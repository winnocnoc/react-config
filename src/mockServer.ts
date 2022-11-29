import express from 'express';
import { APIModel } from './apis/apis';
import { getMockData } from './mocks/utils';

const app = express();

app.all('/api/*', async (req, res) => {
  const path = (req.params as any)['0'] as keyof APIModel;
  const files = await getMockData(path);

  res.json(files.default);
});

export const handler = app;
