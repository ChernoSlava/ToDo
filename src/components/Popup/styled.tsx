import { ThemeType } from '@theme';
import styled from 'styled-components';

export const PopupStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  min-height: 200px;
  min-width: 300px;
  background-color: ${props => (props.theme as ThemeType).colors.white};
`;

export const PopupOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 99;
  opacity: 0.5;
  background-color: ${props => (props.theme as ThemeType).colors.grey};
`;
