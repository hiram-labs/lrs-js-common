import { RequestHandler } from 'express';
import FileStreamRotator from 'file-stream-rotator';
import morgan from 'morgan';

export default (morganDirectory: string): RequestHandler => {
  const accessLogStream = FileStreamRotator.getStream({
    date_format: 'YYYYMMDD',
    filename: `${morganDirectory}/access-%DATE%.log`,
    frequency: 'daily',
    verbose: false
  }) as unknown as NodeJS.WritableStream;
  morgan.token('query', (req) => {
    return new URL(req.url!, `http://${req.headers.host}`)['search'];
  });
  return morgan(':method :url :remote-addr :referrer :date :query :status', {
    stream: accessLogStream
  });
};
