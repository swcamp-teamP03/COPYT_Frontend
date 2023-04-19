import styled from 'styled-components';

export const GNBContainer = styled.div`
  position: sticky;
  min-width: 200px;
  height: 100vh;
  border-right: 1px solid ${({ theme }) => theme.colors.gray30};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 5;
  top: 0;
`;

export const Logo = styled.div`
  margin: 15px 15px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const NavWrapper = styled.nav`
  margin-top: 20px;
  flex-grow: 1;
`;

interface NavItemProps {
  isSelected: boolean;
}

export const NavItem = styled.div<NavItemProps>`
  cursor: pointer;
  padding: 10px 18px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => (props.isSelected ? props.theme.colors.white : props.theme.colors.blue50)};
  font-weight: bold;
  text-align: left;
  gap: 15px;
  background-color: ${(props) => (props.isSelected ? props.theme.colors.blue30 : props.theme.colors.white)};
  border-radius: 10px;
  margin: 5px 7px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue30};
    color: ${({ theme }) => theme.colors.white};
    svg path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }

  svg path {
    fill: ${(props) => (props.isSelected ? props.theme.colors.white : props.theme.colors.blue50)};
  }
`;

export const CategoryWrapper = styled.nav`
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  margin-bottom: 40px;
  hr {
    opacity: 0.2;
    margin-bottom: 10px;
  }
`;

export const CategoryItem = styled.div`
  cursor: pointer;
  padding: 8px 18px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${({ theme }) => theme.colors.blue60};
  font-weight: bold;
  text-align: left;
  gap: 15px;
  font-size: 14px;
  border-radius: 10px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray30};
  }
  div {
    width: 20px;
    height: 20px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.blue50};
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 16px;
  padding: 8px 28px;
`;
