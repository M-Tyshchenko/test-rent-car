import styled from 'styled-components';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 100%;

  height: 268px;
  margin-bottom: 14px;
  border-radius: 14px;
  object-fit: cover;
  /* transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1); */

  /* &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  } */
`;

export const FavoriteBtn = styled(FaHeart)`
  position: absolute;
  top: 14px;
  right: 14px;
  /* color: red; */
  fill: #3470ff;
  stroke: #3470ff;
  /* background-color: aqua; */
  /* fill: rgba(255, 255, 255, 0.8); */
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #121417;
`;

export const ColorAccent = styled.span`
  color: #3470ff;
`;

export const CardDescription = styled.p`
  margin-bottom: 28px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: rgba(18, 20, 23, 0.5);
`;

export const LearnMoreBtn = styled.button`
  width: 274px;
  height: 44px;
  margin: 0 auto;
  color: #fff;
  background-color: #3470ff;
  border-radius: 12px;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;

export const ModalImage = styled.img`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;
