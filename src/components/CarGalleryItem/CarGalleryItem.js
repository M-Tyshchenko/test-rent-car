import Modal from 'react-modal';

import {
  ImageContainer,
  Image,
  CardTitle,
  CardDescription,
  LearnMoreBtn,
  ListItem,
  ColorAccent,
  FavoriteBtn,
  ModalImage,
} from './CarGalleryItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeModalState } from 'redux/modalSlice';
import { selectModal } from 'redux/selectors';

Modal.setAppElement('#root');

export const CarGalleryItem = ({ car }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectModal);
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
      <LearnMoreBtn
        type="button"
        onClick={() => dispatch(changeModalState(true))}
      >
        Learn more
      </LearnMoreBtn>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => dispatch(changeModalState(false))}
        style={{
          overlay: {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: '1200',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },

          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <ModalImage src={car.img} alt={car.make} loading="lazy" />
      </Modal>
    </ListItem>
  );
};
