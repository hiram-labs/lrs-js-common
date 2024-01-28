import { v4 as uuid } from 'uuid';
import Config from '../Config';
import handleError from '../utils/handleError';
import Handler from '../utils/Handler';

export default (config: Config, handler: Handler): Handler => {
  return async (req, res) => {
    handler(req, res).catch((err: any) => {
      const errorId = uuid();
      return handleError({ config, errorId, res, err });
    });
  };
};
