import styled from 'styled-components';

interface ContainerProps {
  isSelected: boolean;
}

export const Container = styled.div<ContainerProps>`
  cursor: pointer;
  width: 100%;
  background-color: white;
  border-radius: 30px;
  padding: 25px;
  margin-bottom: 25px;
  border: 1px solid ${(props) => (props.isSelected ? 'black' : '#bebebe')};
`;

export const Footer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    gap: 15px;
    cursor: pointer;
  }
`;
