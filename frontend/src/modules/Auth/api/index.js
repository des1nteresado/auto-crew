import api from 'api/config';

export const signIn = (body) => api.post('/auth/sign_in', body);
export const signUp = (body) => api.post('/auth/sign_up', body);
export const resetPassword = (body) => api.put('/auth/password', body);
