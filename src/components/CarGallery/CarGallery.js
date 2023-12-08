import { CarGalleryItem } from 'components/CarGalleryItem/CarGalleryItem';
import { useSelector } from 'react-redux';
import {
  selectFilterByPrice,
  selectVisibleCars,
  selectVisibleCarsByBrand,
} from 'redux/selectors';
import { CarGalleryContainer, CarList, LoadMoreBtn } from './CarGallery.styled';

export const CarGallery = () => {
  const filterByPrice = useSelector(selectFilterByPrice);

  const carsByBrand = useSelector(selectVisibleCarsByBrand);
  const carsByBrandAndPrice = useSelector(selectVisibleCars);

  let cars = carsByBrand;
  if (filterByPrice !== 0) {
    cars = carsByBrandAndPrice;
  }
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
