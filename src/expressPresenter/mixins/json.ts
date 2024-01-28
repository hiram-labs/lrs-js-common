import bodyParser from 'body-parser';
import { RequestHandler } from 'express';

export default (limit: string): RequestHandler => {
  return bodyParser.json({
    limit,
    strict: false,
    type: 'application/json'
  });
};
