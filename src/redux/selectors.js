import { createSelector } from "@reduxjs/toolkit";

export const selectCars = state => state.cars.cars;
export const selectFavoriteCars = state => state.cars.favorites;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;
export const selectFilterByBrand = state => state.filter.filter;

export const selectVisibleCars = createSelector(
  [selectCars, selectFilterByBrand],
  (cars, filter) =>
    cars.filter(car =>
      car.make.includes(filter)
    )
);

export const selectVisibleFavorites = createSelector(
  [selectFavoriteCars, selectFilterByBrand],
  (favorites, filter) =>
    favorites.filter(car =>
      car.make.includes(filter)
    )
);