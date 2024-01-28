import { RequiredWarning, RestrictedKeysWarning, TypeWarning, Warning } from '../../warnings';
import Translator from '../../translatorFactory/Translator';

export default (translator: Translator, warning: Warning) => {
  switch (warning.constructor) {
    case TypeWarning:
      return translator.typeWarning(warning as TypeWarning);
    case RequiredWarning:
      return translator.requiredWarning(warning as RequiredWarning);
    case RestrictedKeysWarning:
      return translator.restrictedKeysWarning(warning as RestrictedKeysWarning);
    case Warning:
    default:
      return translator.warning(warning);
  }
};
