import { Response } from 'express';
import sendObject from '../utils/sendObject';

export interface Opts {
  readonly res: Response;
  readonly code: number;
  readonly errorId: string;
  readonly message: string;
}

export default ({ res, code, errorId, message }: Opts): Response => {
  const obj = { message };
  return sendObject({ res, code, errorId, obj });
};
