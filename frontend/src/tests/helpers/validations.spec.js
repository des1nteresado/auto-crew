import {
  validateEmail,
  validatePassword,
  validateBaseInput,
  validatePhone,
} from 'helpers/validations';

describe('validateEmail helper', () => {
  it('checks positive cases', () => {
    expect(validateEmail('valid@email.ru')).toBeTruthy();
    expect(validateEmail('v@mail.ru')).toBeTruthy();
    expect(validateEmail('valid@m.ru')).toBeTruthy();
  });

  it('checks negative cases', () => {
    expect(validateEmail('invalidemail.ru')).toBeFalsy();
    expect(validateEmail('   invalide@mail.ru    ')).toBeFalsy();
    expect(validateEmail('invalid@.ru')).toBeFalsy();
    expect(validateEmail('invalide@mail.r')).toBeFalsy();
    expect(validateEmail('invalide@mail')).toBeFalsy();
    expect(validateEmail('invalidEmail')).toBeFalsy();
    expect(validateEmail(null)).toBeFalsy();
    expect(validateEmail(undefined)).toBeFalsy();
    expect(validateEmail()).toBeFalsy();
  });
});

describe('validatePassword helper', () => {
  it('checks positive cases', () => {
    expect(validatePassword('pass')).toBeTruthy();
    expect(validatePassword('p')).toBeTruthy();
    expect(validatePassword('     p       ')).toBeTruthy();
  });

  it('checks negative cases', () => {
    expect(validatePassword('')).toBeFalsy();
    expect(validatePassword('    ')).toBeFalsy();
    expect(validatePassword(null)).toBeFalsy();
    expect(validatePassword(undefined)).toBeFalsy();
    expect(validatePassword()).toBeFalsy();
  });
});

describe('validateBaseInput helper', () => {
  it('checks positive cases', () => {
    expect(validateBaseInput('valid')).toBeTruthy();
    expect(validateBaseInput('null')).toBeTruthy();
    expect(validateBaseInput('undefined')).toBeTruthy();
  });

  it('checks negative cases', () => {
    expect(validateBaseInput('')).toBeFalsy();
    expect(validateBaseInput('    ')).toBeFalsy();
    expect(validateBaseInput(null)).toBeFalsy();
    expect(validateBaseInput(undefined)).toBeFalsy();
    expect(validateBaseInput()).toBeFalsy();
  });
});

describe('validatePhone helper', () => {
  it('checks positive cases', () => {
    expect(validatePhone('')).toBeTruthy();
    expect(validatePhone('+12345')).toBeTruthy();
  });

  it('checks negative cases', () => {
    expect(validatePhone('    ')).toBeFalsy();
    expect(validatePhone('  +213124  ')).toBeFalsy();
    expect(validatePhone(null)).toBeFalsy();
    expect(validatePhone(undefined)).toBeFalsy();
    expect(validatePhone()).toBeFalsy();
  });
});
