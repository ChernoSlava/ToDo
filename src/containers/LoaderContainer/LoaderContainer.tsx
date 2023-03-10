import { Loader } from '@components';
import { getLoaderContainerProps } from '@store';
import React from 'react';
import { useSelector } from 'react-redux';

export const LoaderContainer = () => {
  const { isShow } = useSelector(getLoaderContainerProps);
  return isShow && <Loader />;
};
