import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

export const useRouteToGo = (path) => {
  const history = useHistory();

  return useCallback(() => history.push(path), [path, history]);
};
