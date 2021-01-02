import { pickBy, identity } from 'lodash';

export const omitUndefined = (object) => pickBy(object, identity);
