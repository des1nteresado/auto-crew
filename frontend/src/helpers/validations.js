export const validateEmail = (email) => {
  const emailRegex = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  return password?.trim().length > 0;
};

export const validateBaseInput = (value) => {
  return !!value && value.trim();
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

  return phoneRegex.test(phone) || phone === '';
};
