import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars.cars;

export const selectTotalCars = state => state.cars.cars.length;

export const selectFavoriteCars = state => state.favorites.favorites;

export const selectIsLoading = state => state.cars.isLoading;

export const selectError = state => state.cars.error;

export const selectFilterByBrand = state => state.filter.filterBrand;

export const selectFilterByPrice = state => state.filter.filterPrice;

export const selectVisibleCars = createSelector(
  [selectCars, selectFilterByBrand, selectFilterByPrice],
  (cars, filterBrand, filterPrice) => {
    let filteredCars = cars;

    if (filterBrand !== '' && filterPrice !== '') {
      filteredCars = cars
        .filter(car =>
          car.make.toLowerCase().includes(filterBrand.toLowerCase())
        )
        .filter(
          car =>
            Number(car.rentalPrice.slice(1, car.rentalPrice.length)) <=
            Number(filterPrice)
        );
      return filteredCars;
    } else if (filterBrand === '' && filterPrice !== '') {
      filteredCars = cars.filter(
        car =>
          Number(car.rentalPrice.slice(1, car.rentalPrice.length)) <=
          Number(filterPrice)
      );
      return filteredCars;
    } else if (filterBrand !== '' && filterPrice === '') {
      filteredCars = cars.filter(car =>
        car.make.toLowerCase().includes(filterBrand.toLowerCase())
      );
      return filteredCars;
    }
    return filteredCars;
  }
);

export const selectVisibleFavorites = createSelector(
  [selectFavoriteCars, selectFilterByBrand, selectFilterByPrice],
  (favoriteCars, filterBrand, filterPrice) => {
    let filteredCars = favoriteCars;

    if (filterBrand !== '' && filterPrice !== '') {
      filteredCars = favoriteCars
        .filter(car =>
          car.make.toLowerCase().includes(filterBrand.toLowerCase())
        )
        .filter(
          car =>
            Number(car.rentalPrice.slice(1, car.rentalPrice.length)) <=
            Number(filterPrice)
        );
      return filteredCars;
    } else if (filterBrand === '' && filterPrice !== '') {
      filteredCars = favoriteCars.filter(
        car =>
          Number(car.rentalPrice.slice(1, car.rentalPrice.length)) <=
          Number(filterPrice)
      );
      return filteredCars;
    } else if (filterBrand !== '' && filterPrice === '') {
      filteredCars = favoriteCars.filter(car =>
        car.make.toLowerCase().includes(filterBrand.toLowerCase())
      );
      return filteredCars;
    }
    return filteredCars;
  }
);
