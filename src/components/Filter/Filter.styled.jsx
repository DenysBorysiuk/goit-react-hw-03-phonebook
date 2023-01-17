import styled from '@emotion/styled';

export const Label = styled.label`
  display: block;
  margin: 20px auto;
  padding-top: 10px;
  padding-bottom: 10px;
  max-width: 50%;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: -5px -5px 9px rgba(255, 255, 255, 0.45),
    5px 5px 9px rgba(94, 104, 121, 0.3);
`;

export const Input = styled.input`
  display: block;
  margin-top: 4px;
  margin-right: auto;
  margin-left: auto;
  padding: 8px 10px;
  width: 80%;
  background-color: transparent;
  border: none;
  outline: none;
  border-radius: 20px;
  box-shadow: inset -5px -5px 9px rgba(255, 255, 255, 0.45),
    inset 5px 5px 9px rgba(94, 104, 121, 0.3);

  &:hover,
  &:focus {
    box-shadow: -5px -5px 9px rgba(255, 255, 255, 0.45),
      5px 5px 9px rgba(94, 104, 121, 0.3);
  }
`;
