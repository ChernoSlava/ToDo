import styled from 'styled-components';

export const ListStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  min-width: 400px;
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  min-height: 40px;
  align-items: center;
`;
export const ListItemFinish = styled.div<{
  isFinish: boolean;
}>`
  ${props =>
    props.isFinish &&
    `
    text-decoration: line-through;
  `}
`;
