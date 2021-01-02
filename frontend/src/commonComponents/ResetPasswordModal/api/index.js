import api from '../../../api/config';

export const resetPassword = (body) => api.put('/auth/password', body);
