import { RequiredWarning, RestrictedKeysWarning, TypeWarning, Warning } from '../warnings';
import Forbidden from '../errors/Forbidden';
import InvalidAuth from '../errors/InvalidAuth';
import NoModel from '../errors/NoModel';
import Unauthorised from '../errors/Unauthorised';

interface Translator {
  readonly serverError: () => string;
  readonly unauthorisedError: (err: Unauthorised) => string;
  readonly noModelError: (err: NoModel) => string;
  readonly invalidAuthError: (err: InvalidAuth) => string;
  readonly forbiddenError: (err: Forbidden) => string;
  readonly typeWarning: (err: TypeWarning) => string;
  readonly requiredWarning: (err: RequiredWarning) => string;
  readonly restrictedKeysWarning: (err: RestrictedKeysWarning) => string;
  readonly warning: (err: Warning) => string;
}

export default Translator;
