import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: white;
  border-radius: 30px;
  padding: 25px;
  margin-bottom: 25px;
  span {
    font-size: 16px;
  }
`;

export const EditMode = styled.div`
  height: 80%;
  textarea {
    border-radius: 10px;
    width: 100%;
    resize: none;
    height: 150px;
  }
`;

export const PinButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export const EditButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
export const CopyButton = styled(PinButton)``;

export const DeleteButton = styled.button`
  position: absolute;
  cursor: pointer;
  right: 0;
  top: -0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.gray40};
`;

export const TextCount = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }) => theme.colors.gray40};
  margin-top: 20px;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  div {
    display: flex;
    cursor: pointer;
  }
`;
