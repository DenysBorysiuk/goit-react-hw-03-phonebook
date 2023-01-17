import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormWrap = styled(Form)`
  margin: 20px auto;
  padding-top: 20px;
  padding-bottom: 20px;
  max-width: 400px;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow.In};
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

  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow.Out};
`;

export const Input = styled(Field)`
  display: block;
  margin-top: 4px;
  margin-right: 0;
  margin-bottom: 4px;
  padding: 4px 6px;
  background-color: transparent;
  outline: none;

  border: none;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow.In};

  &:hover,
  &:focus {
    box-shadow: ${props => props.theme.boxShadow.Out};
  }
`;

export const Message = styled(ErrorMessage)`
  position: absolute;
  font-size: 11px;
`;

export const FormBtn = styled.button`
  display: inline-flex;
  padding: 8px 24px;

  font-size: 18px;
  font-weight: 500;
  background-color: transparent;
  cursor: pointer;

  border: none;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow.Out};

  &:active {
    box-shadow: ${props => props.theme.boxShadow.In};
  }
`;
