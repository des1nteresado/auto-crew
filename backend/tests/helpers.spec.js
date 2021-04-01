const { validateEmail } = require('../src/helpers');

describe('validateEmail helper', () => {
  it('checks positive cases', () => {
    expect(validateEmail('valid@email.ru')).toBeTruthy();
    expect(validateEmail('v@mail.ru')).toBeTruthy();
    expect(validateEmail('valid@m.ru')).toBeTruthy();
  });

  it('checks negative cases', () => {
    expect(validateEmail('invalidemail.ru')).toBeFalsy();
    expect(validateEmail('invalid@.ru')).toBeFalsy();
    expect(validateEmail('invalide@mail')).toBeFalsy();
    expect(validateEmail('invalidEmail')).toBeFalsy();
    expect(validateEmail(null)).toBeFalsy();
    expect(validateEmail(undefined)).toBeFalsy();
    expect(validateEmail()).toBeFalsy();
  });
});
