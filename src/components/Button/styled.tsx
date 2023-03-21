import styled from 'styled-components';

export const ButtonStyled = styled.div<{
  isDisabled: boolean;
}>`
  cursor: pointer;
  display: inline-block;

  ${props =>
    props.isDisabled &&
    `pointer-events: none;
    opacity: 0.4;`}
`;
