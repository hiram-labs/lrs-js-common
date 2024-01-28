import { boolean } from 'boolean';
import { defaultTo } from 'lodash';

export default (value: any, defaultValue = true): boolean => {
  return boolean(defaultTo<any>(value, defaultValue));
};
