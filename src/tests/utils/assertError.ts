import assert from 'assert';

export default (expectedConstructor: Function, promise: Promise<any>): Promise<void> => {
  return promise.then(
    () => {
      assert(false, 'Expected an error to be thrown');
    },
    (err) => {
      const actualConstructor = err.constructor;
      if (actualConstructor === expectedConstructor) {
        return;
      }
      const x = new Error('Expected a different error constructor');
      x.stack = err.stack;
      throw x;
    }
  );
};
