/* tslint:disable:no-class */
import BaseError from './BaseError';

export default class extends BaseError {
  constructor(public modelName: string) {
    super();
  }
}
