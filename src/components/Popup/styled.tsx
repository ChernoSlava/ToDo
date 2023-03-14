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
  /* background-color: ${props => (props.theme as ThemeType).colors.white}; */
  background: rgb(21, 219, 244);
  background: radial-gradient(
    circle,
    rgba(21, 219, 244, 1) 18%,
    rgba(218, 87, 156, 1) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 25px;
`;

export const PopupOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  opacity: 0.5;
  background-color: #65160868;
  /* background-color: ${props => (props.theme as ThemeType).colors.grey}; */
`;
export const PopupContent = styled.div`
  height: 100%;
  display: flex;
  align-self: center;
  padding-top: 50px;
`;
export const PopupFooter = styled.div`
  justify-content: center;
  height: 80px;
  display: flex;
  align-items: center;
`;
