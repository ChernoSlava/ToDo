import styled from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import { ThemeType } from '@theme';

export const PopupStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  min-height: 200px;
  min-width: 300px;
  background-color: ${props => (props.theme as ThemeType).colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PopupOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  opacity: 0.5;
  background-color: ${props => (props.theme as ThemeType).colors.grey};
`;
export const PopupContent = styled.div`
  height: 100%;
`;
export const PopupFooter = styled.div`
  height: 80px;
`;
