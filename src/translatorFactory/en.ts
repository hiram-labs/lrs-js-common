import Translator from './Translator';

const stringPath = (path: string[]) => {
  return path.join('.');
};

const translator: Translator = {
  forbiddenError: () => 'Forbidden',
  invalidAuthError: (err) => `Invalid auth '${err.auth}'`,
  noModelError: (err) => `No ${err.modelName} found`,
  requiredWarning: (warning) => {
    const path = stringPath(warning.path);
    return `Missing required value in '${path}'`;
  },
  restrictedKeysWarning: (warning) => {
    const path = stringPath(warning.path);
    const keys = warning.keys.join(', ');
    return `Unknown keys (${keys}) set in '${path}'`;
  },
  serverError: () => 'A server error occurred',
  typeWarning: (warning) => {
    const path = stringPath(warning.path);
    const typeName = warning.type.name;
    const dataString = JSON.stringify(warning.data);
    return `Expected '${path}' to be '${typeName}'. Received '${dataString}'`;
  },
  unauthorisedError: () => 'Unauthorised',
  warning: (warning) => {
    const path = stringPath(warning.path);
    const dataString = JSON.stringify(warning.data);
    return `Problem in '${path}'. Received '${dataString}'`;
  }
};

export default translator;
