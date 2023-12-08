// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { changeFilterByBrand, changeFilterByPrice } from 'redux/filterSlice';
import { selectFilterByBrand, selectFilterByPrice } from 'redux/selectors';
import {
  Form,
  FormLabel,
  InputBox,
  Input,
  SearchBtn,
} from './SearchBar.styled';

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
let priceOption = [];
for (let i = 10; i <= 500; i += 10) {
  priceOption.push({ value: i, label: i });
}

export const SearchBar = () => {
  // const [selectedOption, setSelectedOption] = useState('');
  const dispatch = useDispatch();
  const filterByBrand = useSelector(selectFilterByBrand);
  const filterByPrice = useSelector(selectFilterByPrice);

  return (
    <>
      <Form>
        <FormLabel>
          Car brand
          <Select
            placeholder="Enter the text"
            defaultValue={filterByBrand}
            onChange={event => {
              console.log(event);
              dispatch(changeFilterByBrand(event.value));
            }}
            options={brandOptions}
          />
        </FormLabel>

        <FormLabel>
          Price/1hour
          <Select
            placeholder="To $"
            autosuggest="false"
            defaultValue={filterByPrice}
            onChange={event => {
              console.log(event.value);
              dispatch(changeFilterByPrice(event.value));
            }}
            options={priceOption}
            styles={{ color: 'red' }}
          />
        </FormLabel>
        <FormLabel>
          Car mileage / km
          <InputBox>
            <Input
              placeholder="From"
              style={{
                borderTopLeftRadius: '14px',
                borderBottomLeftRadius: '14px',
                borderRightColor: 'rgba(138,138,137,0.2)',
              }}
            />
            <Input
              placeholder="To"
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

//  <option value="buick" label="Buick" />
// <option value="volvo" label="Volvo" />
// <option value="hummer" label="HUMMER" />
// <option value="subaru" label="Subaru" />
// <option value="mitsubishi" label="Mitsubishi" />
// <option value="nissan" label="Nissan" />
// <option value="lincoln" label="Lincoln" />
// <option value="gmc" label="GMC" />
// <option value="hyundai" label="Hyundai" />
// <option value="mini" label="MINI" />
// <option value="bentley" label="Bentley" />
// <option value="mercedes" label="Mercedes-Benz" />
// <option value="aston" label="Aston Martin" />
// <option value="pontiac" label="Pontiac" />
// <option value="lamborghini" label="Lamborghini" />
// <option value="audi" label="Audi" />
// <option value="bmw" label="BMW" />
// <option value="chevrolet" label="Chevrolet" />
// <option value="chrysler" label="Chrysler" />
// <option value="kia" label="Kia" />
// <option value="land" label="Land" />
