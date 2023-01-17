import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  padding: 4px 8px;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow.Out};
`;

export const ContactText = styled.span`
  display: flex;
  align-items: center;
  font-size: 18px;
`;

export const ContactBtn = styled.button`
  // padding: 8px 24px;
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
