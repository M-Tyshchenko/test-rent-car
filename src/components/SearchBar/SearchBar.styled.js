import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
  padding-bottom: 25px;
  color: #121417;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #8a8a89;
`;

export const SelectBrand = styled.select`
  width: 224px;
  height: 48px;

  font-size: 18px;
  line-height: 20px;
  padding: 14px 18px;
  background-color: #f7f7fb;
  /* color: #8a8a89; */
  border-color: transparent;
  border-radius: 14px;
`;

export const SelectPrice = styled.select`
  width: 125px;
  height: 48px;

  font-size: 18px;
  line-height: 20px;
  padding: 14px 18px;
  background-color: #f7f7fb;
  /* color: #8a8a89; */
  border-color: transparent;
  border-radius: 14px;
`;

export const InputBox = styled.div`
  display: flex;
`;

export const Input = styled.input`
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  padding: 14px 18px;
  background-color: #f7f7fb;
  /* color: #8a8a89; */
  border-color: transparent;

  width: 160px;
  height: 48px;

  &::placeholder {
    color: #121417;
  }
`;

export const SearchBtn = styled.button`
  width: 136px;
  height: 48px;
  border-radius: 12px;

  color: #fff;
  background-color: #3470ff;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
