import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars.cars;

export const selectFavoriteCars = state => state.cars.favorites;

export const selectIsLoading = state => state.cars.isLoading;

export const selectError = state => state.cars.error;

export const selectFilterByBrand = state => state.filter.filterBrand;

export const selectFilterByPrice = state => state.filter.filterPrice;

export const selectVisibleCarsByBrand = createSelector(
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

// export const selectVisibleCarsByBrand = createSelector(
//   [selectCars, selectFilterByBrand],
//   (cars, filterBrand) => {
//     cars.filter(car =>
//       car.make.toLowerCase().includes(filterBrand.toLowerCase())
//     );
//   }
// );

// export const selectVisibleCarsByPrice = createSelector(
//   [selectCars, selectFilterByPrice],
//   (cars, filterByPrice) =>
//     cars.filter(
//       car =>
//         Number(car.rentalPrice.slice(1, car.rentalPrice.length)) <=
//         filterByPrice
//     )
// );

// export const selectVisibleCars = createSelector(
//   [selectVisibleCarsByBrand, selectFilterByPrice],
//   (filteredByBrand, filterByPrice) =>
//     filteredByBrand.filter(
//       car =>
//         Number(car.rentalPrice.slice(1, car.rentalPrice.length)) <=
//         filterByPrice
//     )
// );

export const selectVisibleFavorites = createSelector(
  [selectFavoriteCars, selectFilterByBrand],
  (favorites, filter) =>
    favorites.filter(car =>
      car.make.toLowerCase().includes(filter.toLowerCase())
    )
);
