import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  background-color: white;
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  top: -1px;
  left: -1px;
  border: 1px solid ${({ theme }) => theme.colors.gray30};
  z-index: 100;
`;

interface PaddingProps {
  padding: string;
}

export const ListItem = styled.div<PaddingProps>`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray30};
  padding: ${(props) => props.padding};
  :nth-last-of-type(1) {
    border: none;
  }
`;

export const Base = styled.div<PaddingProps>`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray30};
  padding: ${(props) => props.padding};
  display: flex;
  justify-content: space-between;
`;

export const Chevron = styled.div`
  width: 12px;
`;

interface ItemProps {
  isSelected: boolean;
}

export const Item = styled.div<ItemProps>`
  color: ${(props) => (props.isSelected ? props.theme.colors.red : props.theme.colors.gray50)};
`;
