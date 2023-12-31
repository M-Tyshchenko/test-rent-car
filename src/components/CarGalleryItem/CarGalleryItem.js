import Modal from 'react-modal';
import { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import {
  ImageContainer,
  Image,
  CardTitle,
  CardDescription,
  LearnMoreBtn,
  ListItem,
  ColorAccent,
  FavoriteFalseBtn,
  FavoriteTrueBtn,
  ModalImage,
  ModalContainer,
  ModalCloseButton,
  DescrContainer,
  CarDescr,
  CardContainer,
  CarCharacteristicsTitle,
  ConditionsList,
  ConditionsListItem,
  RentalCarBtn,
} from './CarGalleryItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteCars } from 'redux/selectors';
import { addFavorite, deleteFromFavorites } from 'redux/favoritesSlice';

Modal.setAppElement('#root');

export const CarGalleryItem = ({ car }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavoriteCars);

  const address = car.address.split(',');
  const rentalConditions = car.rentalConditions.split('\n');
  const minDriverAge = Number(rentalConditions[0].slice(-2));
  const mileage = car.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  let isFavorite = false;
  const findingFavorite = favorites.find(favorite => favorite.id === car.id);
  if (findingFavorite !== undefined) {
    isFavorite = true;
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <ListItem>
        <div>
          <ImageContainer>
            <Image src={car.img} alt={car.make} loading="lazy" />
            {isFavorite && (
              <FavoriteTrueBtn
                type="button"
                onClick={() => dispatch(deleteFromFavorites(car.id))}
              >
                <FaHeart size={18} />
              </FavoriteTrueBtn>
            )}

            {!isFavorite && (
              <FavoriteFalseBtn
                type="button"
                onClick={() => dispatch(addFavorite(car))}
              >
                <FaRegHeart size={18} />
              </FavoriteFalseBtn>
            )}
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
        <LearnMoreBtn type="button" onClick={openModal}>
          Learn more
        </LearnMoreBtn>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              position: 'fixed',
              top: '0',
              left: '0',
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(18, 20, 23, 0.5)',
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
              padding: '0',
              border: 'none',
            },
          }}
        >
          <ModalContainer>
            <ModalImage src={car.img} alt={car.make} loading="lazy" />
            <ModalCloseButton type="button" onClick={closeModal}>
              <RxCross1 size={12} />
            </ModalCloseButton>

            <CardContainer>
              <div>
                <CardTitle>
                  <p>
                    {car.make} <ColorAccent>{car.model}</ColorAccent>,{' '}
                    {car.year}
                  </p>
                </CardTitle>

                <DescrContainer>
                  <CardDescription>
                    {address[1]} | {address[2]} | Id: {car.id} | Year:{' '}
                    {car.year} | Type: {car.type}
                  </CardDescription>
                  <CardDescription>
                    Fuel Consumption: {car.fuelConsumption} | Engine Size:{' '}
                    {car.engineSize}
                  </CardDescription>
                </DescrContainer>

                <CarDescr>{car.description}</CarDescr>
              </div>

              <div>
                <CarCharacteristicsTitle>
                  Accessories and functionalities:
                </CarCharacteristicsTitle>
                <CardDescription>
                  {car.accessories.map(accessory => accessory + ' | ')}
                </CardDescription>
                <CardDescription>
                  {car.functionalities.map(
                    functionality => functionality + ' | '
                  )}
                </CardDescription>
              </div>

              <div>
                <CarCharacteristicsTitle>
                  Rental Conditions:
                </CarCharacteristicsTitle>

                <ConditionsList>
                  <ConditionsListItem>
                    {rentalConditions[0].slice(0, -2)}{' '}
                    <ColorAccent>{minDriverAge}</ColorAccent>
                  </ConditionsListItem>
                  <ConditionsListItem>{rentalConditions[1]}</ConditionsListItem>
                  <ConditionsListItem>{rentalConditions[2]}</ConditionsListItem>
                  <ConditionsListItem>
                    Mileage: <ColorAccent>{mileage}</ColorAccent>
                  </ConditionsListItem>
                  <ConditionsListItem>
                    Price: <ColorAccent>{car.rentalPrice}</ColorAccent>
                  </ConditionsListItem>
                </ConditionsList>
              </div>

              <RentalCarBtn href="tel:+380730000000">Rental car</RentalCarBtn>
            </CardContainer>
          </ModalContainer>
        </Modal>
      </ListItem>
    </>
  );
};
