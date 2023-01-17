import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormWrap = styled(Form)`
  margin: 20px auto;
  padding-top: 20px;
  padding-bottom: 20px;
  max-width: 400px;
  border-radius: 20px;
  box-shadow: inset -5px -5px 9px rgba(255, 255, 255, 0.45),
    inset 5px 5px 9px rgba(94, 104, 121, 0.3);
`;

export const Label = styled.label`
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding-top: 10px;
  padding-bottom: 25px;
  padding-left: 65px;
  width: 60%;
  font-size: 18px;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: -5px -5px 9px rgba(255, 255, 255, 0.45),
    5px 5px 9px rgba(94, 104, 121, 0.3);
`;

export const Input = styled(Field)`
  display: block;
  margin-top: 4px;
  margin-right: 0;
  margin-bottom: 4px;
  padding: 4px 6px;
  background-color: transparent;
  outline: none;

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  border: none;
  border-radius: 20px;
  box-shadow: inset -5px -5px 9px rgba(255, 255, 255, 0.45),
    inset 5px 5px 9px rgba(94, 104, 121, 0.3);

  &:hover,
  &:focus {
    box-shadow: -5px -5px 9px rgba(255, 255, 255, 0.45),
      5px 5px 9px rgba(94, 104, 121, 0.3);
  }
`;

export const Message = styled(ErrorMessage)`
  position: absolute;
  font-size: 11px;
`;

export const FormBtn = styled.button`
  display: inline-block;
  padding: 8px 24px;
  font-size: 18px;
  font-weight: 500;
  background-color: transparent;
  cursor: pointer;
  transition: box-shadow 500ms cubic-bezier(0.4, 0, 0.2, 1);

  border: none;
  border-radius: 20px;
  box-shadow: -5px -5px 9px rgba(255, 255, 255, 0.45),
    5px 5px 9px rgba(94, 104, 121, 0.3);

  &:active {
    box-shadow: inset -5px -5px 9px rgba(255, 255, 255, 0.45),
      inset 5px 5px 9px rgba(94, 104, 121, 0.3);
  }
`;
