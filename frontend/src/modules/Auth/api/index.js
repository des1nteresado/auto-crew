import api from 'api/config';

export const signInRequest = (body) => api.post('/auth/sign-in', body);
export const signUpRequest = (body) => api.post('/auth/sign-up', body);
export const resetPasswordRequest = (body) => api.put('/auth/reset-password', body);
