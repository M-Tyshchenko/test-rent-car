import styled from 'styled-components';

export const CarGalleryContainer = styled.div`
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export const CarList = styled.ul`
  display: grid;
  max-width: calc(100vw - 256px);
  grid-template-columns: repeat(4, minmax(274px, 1fr));
  column-gap: 29px;
  row-gap: 50px;
`;

export const LoadMoreBtn = styled.button`
  background-color: transparent;
  color: #3770ff;
  text-decoration: underline;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;
