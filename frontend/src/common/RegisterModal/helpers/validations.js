import {
  INVALID_PASSWORD_LENGTH,
  INVALID_PASSWORD_LOWERCASE,
  INVALID_PASSWORD_UPPERCASE,
  INVALID_PASSWORD_SPECIAL_CHARACTER,
} from '../../../constants/errorMessages';

function isCorrectPasswordLength(password) {
  return password.length >= 8;
}

function hasLowerCase(text) {
  return text.toUpperCase() !== text;
}

function hasUpperCase(text) {
  return text.toLowerCase() !== text;
}

function hasSpecialCharacter(text) {
  const format = /[ !@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?]/;
  return format.test(text);
}

export const validatePassword = (password) => {
  return (
    isCorrectPasswordLength(password) &&
    hasLowerCase(password) &&
    hasUpperCase(password) &&
    hasSpecialCharacter(password)
  );
};

export const getPasswordError = (password) => {
  if (!isCorrectPasswordLength(password)) {
    return INVALID_PASSWORD_LENGTH;
  }
  if (!hasLowerCase(password)) {
    return INVALID_PASSWORD_LOWERCASE;
  }
  if (!hasUpperCase(password)) {
    return INVALID_PASSWORD_UPPERCASE;
  }
  if (!hasSpecialCharacter(password)) {
    return INVALID_PASSWORD_SPECIAL_CHARACTER;
  }
};

export const validateBaseInput = (value) => {
  return !!value;
};

export const validateConfirmPassword = (password, confirmPassword) => {
  return password === confirmPassword;
};
