import { Response } from 'express';

export interface Opts {
  readonly res: Response;
  readonly code: number;
  readonly errorId: string;
  readonly obj: object;
}

export default ({ res, code, errorId, obj }: Opts): Response => {
  return res.status(code).json({ errorId, ...obj });
};
