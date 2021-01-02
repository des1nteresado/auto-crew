import React from 'react';
import { useSelector } from 'react-redux';

import HomePage from '../components/HomePage';

const HomePageContainer = () => {
  // const { isLoading } = useSelector((state) => state.homePage);

  return <HomePage isLoading={false} />;
};

export default React.memo(HomePageContainer);
