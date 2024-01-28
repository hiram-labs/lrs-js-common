/* tslint:disable:no-class no-this */
export default class implements Error {
  public readonly name: string;
  public readonly message: string;
  public readonly stack?: string;

  constructor() {
    this.message = 'Error';
    this.name = this.constructor.name;
    this.stack = new Error(this.message).stack;
  }
}
