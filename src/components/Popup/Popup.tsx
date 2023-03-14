import React, { ReactNode } from 'react';
import { Portal } from '../Portal';
import { PopupStyled, PopupOverlay, PopupContent, PopupFooter } from './styled';

export const Popup: React.FC<{
  content?: ReactNode;
  footer: ReactNode;
}> = ({ content, footer }) => {
  return (
    <Portal>
      <PopupStyled>
        <PopupContent>{content}</PopupContent>
        <PopupFooter>{footer}</PopupFooter>
      </PopupStyled>
      <PopupOverlay />
    </Portal>
  );
};
