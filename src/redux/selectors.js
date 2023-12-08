import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars.cars;
export const selectFavoriteCars = state => state.cars.favorites;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;
export const selectFilterByBrand = state => state.filter.filterByBrand;
export const selectFilterByPrice = state => state.filter.filterByPrice;

export const selectVisibleCarsByBrand = createSelector(
  [selectCars, selectFilterByBrand],
  (cars, filterByBrand) =>
    cars.filter(car =>
      car.make.toLowerCase().includes(filterByBrand.toLowerCase())
    )
);

// export const selectVisibleCarsByPrice = createSelector(
//   [selectCars, selectFilterByPrice],
//   (cars, filterByPrice) =>
//     cars.filter(
//       car =>
//         Number(car.rentalPrice.slice(1, car.rentalPrice.length)) <=
//         filterByPrice
//     )
// );

export const selectVisibleCars = createSelector(
  [selectVisibleCarsByBrand, selectFilterByPrice],
  (filteredByBrand, filterByPrice) =>
    filteredByBrand.filter(
      car =>
        Number(car.rentalPrice.slice(1, car.rentalPrice.length)) <=
        filterByPrice
    )
);

export const selectVisibleFavorites = createSelector(
  [selectFavoriteCars, selectFilterByBrand],
  (favorites, filter) =>
    favorites.filter(car =>
      car.make.toLowerCase().includes(filter.toLowerCase())
    )
);
