import bodyParser from 'body-parser';
import { RequestHandler } from 'express';

export default (limit: string): RequestHandler => {
  return bodyParser.urlencoded({
    extended: true,
    limit,
    type: 'application/x-www-form-urlencoded'
  });
};
