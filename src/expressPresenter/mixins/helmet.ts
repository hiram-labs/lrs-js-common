import { RequestHandler } from 'express';
import helmet from 'helmet';

export default (): RequestHandler => {
  return helmet({
    frameguard: false
  });
};
