import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { fetchFavoriteCars } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { CarGallery } from 'components/CarGallery/CarGallery';

export const Favorites = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchFavoriteCars());
  }, [dispatch]);
  return (
    <>
      <SearchBar />
      {isLoading && !error && (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#3470FF"
          ariaLabel="three-dots-loading"
          wrapperStyle={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          wrapperClassName=""
          visible={true}
        />
      )}
      <CarGallery />
    </>
  );
};

// export default Favorites;
