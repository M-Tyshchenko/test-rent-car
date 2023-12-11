import styled from 'styled-components';

export const CarList = styled.ul`
  display: grid;
  max-width: calc(100vw - 256px);
  grid-template-columns: repeat(4, minmax(274px, 1fr));
  column-gap: 29px;
  row-gap: 50px;
`;
