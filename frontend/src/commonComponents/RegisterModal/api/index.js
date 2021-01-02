import api from '../../../api/config';

export const signUp = (body) => api.post('/auth/sign_up', body);
