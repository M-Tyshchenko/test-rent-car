import { CarGalleryItem } from 'components/CarGalleryItem/CarGalleryItem';
import { useSelector } from 'react-redux';
import { selectVisibleCars, selectVisibleFavorites } from 'redux/selectors';
import { CarGalleryContainer, CarList, LoadMoreBtn } from './CarGallery.styled';
import { useLocation } from 'react-router-dom';

export const CarGallery = () => {
  const location = useLocation();
  const catalogCars = useSelector(selectVisibleCars);
  const favoritecars = useSelector(selectVisibleFavorites);
  let cars = catalogCars;
  if (location.pathname === '/favorites') {
    cars = favoritecars;
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
