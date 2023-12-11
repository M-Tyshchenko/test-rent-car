import styled from 'styled-components';

export const CatalogContainer = styled.div`
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 100px;
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
