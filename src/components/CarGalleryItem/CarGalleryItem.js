// import { useState } from 'react';
import Modal from 'react-modal';
// import { FaRegHeart } from 'react-icons/fa';
import {
  ImageContainer,
  Image,
  CardTitle,
  CardDescription,
  LearnMoreBtn,
  ListItem,
  ColorAccent,
  FavoriteBtn,
} from './CarGalleryItem.styled';

Modal.setAppElement('#root');

export const CarGalleryItem = ({ car }) => {
  const address = car.address.split(',');

  return (
    <ListItem>
      <div>
        <ImageContainer>
          <Image src={car.img} alt={car.make} loading="lazy" />
          <button type="checkbox">
            <FavoriteBtn size={18} />
          </button>
        </ImageContainer>

        <CardTitle>
          <p>
            {car.make} <ColorAccent>{car.model}</ColorAccent>, {car.year}
          </p>
          <p>{car.rentalPrice}</p>
        </CardTitle>

        <CardDescription>
          {address[1]} | {address[2]} | {car.rentalCompany} | {car.type} |{' '}
          {car.model} | {car.id} | {car.accessories[0]}
        </CardDescription>
      </div>
      <LearnMoreBtn type="button">Learn more</LearnMoreBtn>
    </ListItem>
  );
};
