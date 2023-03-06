import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  width: 100%;
  background-color: white;
  border-radius: 30px;
  padding: 25px;
  margin-bottom: 25px;
`;

export const EditMode = styled.div`
  textarea {
    border-radius: 10px;
    width: 100%;
    resize: none;
    height: 100%;
  }
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
