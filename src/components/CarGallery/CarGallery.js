import { CarGalleryItem } from 'components/CarGalleryItem/CarGalleryItem';
import { useSelector } from 'react-redux';
import { selectVisibleCars, selectVisibleFavorites } from 'redux/selectors';
import { CarList } from './CarGallery.styled';
import { useLocation } from 'react-router-dom';

export const CarGallery = () => {
  const location = useLocation();
  const catalogCars = useSelector(selectVisibleCars);
  const favoriteCars = useSelector(selectVisibleFavorites);

  let cars = catalogCars;

  if (location.pathname === '/favorites') {
    cars = favoriteCars;
  }

  return (
    <>
      <CarList>
        {cars.map(car => (
          <CarGalleryItem key={car.id} car={car} />
        ))}
      </CarList>
    </>
  );
};
