import { CarGallery } from 'components/CarGallery/CarGallery';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/operations';
import {
  selectError,
  selectIsLoading,
  selectTotalCars,
  // selectVisibleCars,
} from 'redux/selectors';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { ThreeDots } from 'react-loader-spinner';
import { CatalogContainer, LoadMoreBtn } from './Catalog.styled';

const Catalog = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const totalCars = useSelector(selectTotalCars);

  const [page, setPage] = useState(1);
  const perPage = 12;
  const totalPages = Math.ceil(totalCars / perPage);

  console.log({ totalCars });
  console.log({ totalPages });
  console.log({ page });

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const LoadMore = () => setPage(prevState => prevState + 1);

  return (
    <CatalogContainer>
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
      {totalCars !== 0 && totalPages !== page && !isLoading && (
        <LoadMoreBtn type="button" onClick={LoadMore}>
          Load More
        </LoadMoreBtn>
      )}
    </CatalogContainer>
  );
};

export default Catalog;
