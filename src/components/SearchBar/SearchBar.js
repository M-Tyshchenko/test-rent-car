import { useDispatch, useSelector } from 'react-redux';
import {
  changeFilterBrand,
  changeFilterMileageFrom,
  changeFilterMileageTo,
  changeFilterPrice,
} from 'redux/filterSlice';
import {
  selectFilterByBrand,
  selectFilterByPrice,
  selectFilterMileageFrom,
  selectFilterMileageTo,
} from 'redux/selectors';

import {
  Form,
  FormLabel,
  InputBox,
  Input,
  SearchBtn,
  SelectBrand,
  SelectPrice,
} from './SearchBar.styled';
import { fetchCars } from 'redux/operations';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const filterByBrand = useSelector(selectFilterByBrand);
  const filterByPrice = useSelector(selectFilterByPrice);
  const filterMileageFrom = useSelector(selectFilterMileageFrom);
  const filterMileageTo = useSelector(selectFilterMileageTo);

  const brandOptions = [
    { value: 'buick', label: 'Buick' },
    { value: 'volvo', label: 'Volvo' },
    { value: 'hummer', label: 'HUMMER' },
    { value: 'subaru', label: 'Subaru' },
    { value: 'mitsubishi', label: 'Mitsubishi' },
    { value: 'nissan', label: 'Nissan' },
    { value: 'lincoln', label: 'Lincoln' },
    { value: 'gmc', label: 'GMC' },
    { value: 'hyundai', label: 'Hyundai' },
    { value: 'mini', label: 'MINI' },
    { value: 'bentley', label: 'Bentley' },
    { value: 'mercedes', label: 'Mercedes-Benz' },
    { value: 'aston', label: 'Aston Martin' },
    { value: 'pontiac', label: 'Pontiac' },
    { value: 'lamborghini', label: 'Lamborghini' },
    { value: 'audi', label: 'Audi' },
    { value: 'bmw', label: 'BMW' },
    { value: 'chevrolet', label: 'Chevrolet' },
    { value: 'chrysler', label: 'Chrysler' },
    { value: 'kia', label: 'Kia' },
    { value: 'land', label: 'Land' },
  ];
  let priceOptions = [{ value: '', label: 'To $' }];
  for (let i = 10; i <= 500; i += 10) {
    priceOptions.push({ value: i, label: i });
  }

  return (
    <>
      <Form
        onSubmit={event => {
          event.preventDefault();
          dispatch(fetchCars());
          dispatch(changeFilterBrand(event.target[0].value));
          dispatch(changeFilterPrice(event.target[1].value));
          dispatch(changeFilterMileageFrom(event.target[2].value));
          dispatch(changeFilterMileageTo(event.target[3].value));
        }}
      >
        <FormLabel>
          Car brand
          <SelectBrand defaultValue={filterByBrand}>
            <option value="">Enter the text</option>
            {brandOptions.map(option => (
              <option
                key={option.value}
                value={option.value}
                label={option.label}
              />
            ))}
          </SelectBrand>
        </FormLabel>

        <FormLabel>
          Price/1hour
          <SelectPrice defaultValue={filterByPrice}>
            {priceOptions.map(option => (
              <option
                key={option.value}
                value={option.value}
                label={option.label}
              />
            ))}
          </SelectPrice>
        </FormLabel>

        <FormLabel>
          Car mileage / km
          <InputBox>
            <Input
              placeholder="From"
              defaultValue={filterMileageFrom}
              style={{
                borderTopLeftRadius: '14px',
                borderBottomLeftRadius: '14px',
                borderRightColor: 'rgba(138,138,137,0.2)',
              }}
            />
            <Input
              placeholder="To"
              defaultValue={filterMileageTo}
              style={{
                borderTopRightRadius: '14px',
                borderBottomRightRadius: '14px',
                borderLefttColor: 'rgba(138,138,137,0.2)',
              }}
            />
          </InputBox>
        </FormLabel>

        <SearchBtn type="submit">Search</SearchBtn>
      </Form>
    </>
  );
};
