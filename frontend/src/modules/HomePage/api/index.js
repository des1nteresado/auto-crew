import api from '../../../api/config';

export const getActiveCompaniesByGender = (targets) =>
  api.get(`/companies?companyTargets=${targets}`);
