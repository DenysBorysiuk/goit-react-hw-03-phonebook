import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 4px 8px;
  border-radius: 20px;
  box-shadow: -5px -5px 9px rgba(255, 255, 255, 0.45),
    5px 5px 9px rgba(94, 104, 121, 0.3);
`;

export const ContactText = styled.span`
  font-size: 18px;
  margin-right: 20px;
  padding: 8px 24px;

  // border-radius: 20px;
  // box-shadow: -5px -5px 9px rgba(255, 255, 255, 0.45),
  //   5px 5px 9px rgba(94, 104, 121, 0.3);
`;

export const ContactBtn = styled.button`
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
