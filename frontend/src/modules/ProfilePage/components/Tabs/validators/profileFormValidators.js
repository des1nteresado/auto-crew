import { isPlainObject, isEmpty, startCase } from 'lodash';
import { validateEmail } from '../../../../../helpers/validations';

export const profileSettingsValidator = (fieldsToCheck = {}) => {
  if (isPlainObject(fieldsToCheck)) {
    const errors = {};

    const arrayedFieldsWithTrimmedValues = Object.entries(fieldsToCheck).reduce((result, field) => {
      field[1] = field[1].trim();

      result.push(field);
      return result;
    }, []);

    arrayedFieldsWithTrimmedValues.forEach((field) => {
      if (field[0].toLowerCase().includes('email')) {
        const isEmailValid = validateEmail(field[1]);

        if (!isEmailValid) {
          errors[field[0]] = 'Invalid Email Address';
        }
      }

      if (field[1] === '') {
        errors[field[0]] = `${startCase(field[0])} field must be filled in`;
      }
    });

    return { errors, isValid: isEmpty(errors) };
  }

  return { isValid: false };
};
