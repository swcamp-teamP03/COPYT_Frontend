import styled from 'styled-components';

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 80px;
  h1 {
    font-size: 32px;
  }
`;

export const Categories = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 35px;
`;

export const CategoryTitle = styled.div`
  align-items: center;
  width: 100%;
  font-size: 20px;
  color: #555555;
  display: flex;
  justify-content: center;
`;

export const Relative = styled.div`
  display: flex;
  justify-content: center;
  min-width: 150px;
  position: relative;
`;
