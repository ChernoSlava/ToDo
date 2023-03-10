import React from 'react';
import { PopupOverlay, PopupStyled } from './styled';

export const Popup: React.FC = (): JSX.Element => {
  return (
    <>
      <PopupStyled />
      <PopupOverlay />
    </>
  );
};
