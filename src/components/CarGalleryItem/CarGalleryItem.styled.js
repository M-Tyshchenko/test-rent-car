import styled from 'styled-components';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  height: 426px;
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

export const FavoriteTrueBtn = styled(FaHeart)`
  position: absolute;
  top: 14px;
  right: 14px;
  color: #3470ff;
`;

export const FavoriteFalseBtn = styled(FaRegHeart)`
  position: absolute;
  top: 14px;
  right: 14px;

  color: rgba(255, 255, 255, 0.8);
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`;

export const ColorAccent = styled.span`
  color: #3470ff;
`;

export const CardDescription = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
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

export const ModalContainer = styled.div`
  position: relative;
  padding: 40px;
  width: 541px;
  border-radius: 24px;
  background-color: #fff;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
`;

export const ModalImage = styled.img`
  width: 461px;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const DescrContainer = styled.div`
  margin-bottom: 14px;
`;

export const CarDescr = styled.p`
  font-weight: 400;
  line-height: 1.43;
  font-size: 14px;
`;

export const CarCharacteristicsTitle = styled.h2`
  margin-bottom: 8px;
  font-weight: 400;
  line-height: 1.43;
  font-size: 14px;
`;

export const ConditionsList = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const ConditionsListItem = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  background-color: #f9f9f9;
  color: #363535;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
`;

export const RentalCarBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 168px;
  height: 44px;

  color: #fff;
  font-size: 14px;
  background-color: #3470ff;
  border-radius: 12px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
