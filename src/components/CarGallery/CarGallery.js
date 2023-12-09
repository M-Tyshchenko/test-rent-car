import { CarGalleryItem } from 'components/CarGalleryItem/CarGalleryItem';
import { useSelector } from 'react-redux';
import { selectVisibleCars } from 'redux/selectors';
import { CarGalleryContainer, CarList, LoadMoreBtn } from './CarGallery.styled';

export const CarGallery = () => {
  const cars = useSelector(selectVisibleCars);

  // const dispatch = useDispatch();

  return (
    <CarGalleryContainer>
      <CarList>
        {cars.map(car => (
          <CarGalleryItem key={car.id} car={car} />
        ))}
      </CarList>
      <LoadMoreBtn type="button">Load More</LoadMoreBtn>
    </CarGalleryContainer>
  );
};
