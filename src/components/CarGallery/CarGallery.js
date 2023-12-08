import { CarGalleryItem } from 'components/CarGalleryItem/CarGalleryItem';
import { useSelector } from 'react-redux';
import { selectCars } from 'redux/selectors';
import { CarGalleryContainer, CarList, LoadMoreBtn } from './CarGallery.styled';

export const CarGallery = () => {
  const cars = useSelector(selectCars);
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
