import api from '../../../../../../api/config';

const baseUrlPart = '/user';

export const getUserInformation = (id) => api.get(`${baseUrlPart}/${id}`);
export const updateUserProfile = (body) => api.patch(`${baseUrlPart}/${body.userId}`, body);
