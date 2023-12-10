import { CarGallery } from 'components/CarGallery/CarGallery';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { ThreeDots } from 'react-loader-spinner';

const Catalog = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCars());
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

export default Catalog;
