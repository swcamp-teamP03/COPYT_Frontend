import React from 'react';
import * as S from './PageHeader.style';

export interface PageHeaderProps {
  title: string;
  buttonTitle: string;
  buttonSize?: 'buttonS' | 'buttonM' | 'buttonL';
  buttonColor?: 'red' | 'white' | 'black' | 'disabled';
  onClick: () => void;
}

const PageHeader = ({ title, buttonTitle, buttonSize = 'buttonS', buttonColor = 'black', onClick }: PageHeaderProps) => {
  return (
    <>
      <S.Container>
        <S.HeadTitle>{title}</S.HeadTitle>
        <S.HeaderButton buttonColor={buttonColor} buttonSize={buttonSize} disabled={buttonColor === 'disabled'} onClick={onClick}>
          {buttonTitle}
        </S.HeaderButton>
      </S.Container>
    </>
  );
};

export default PageHeader;
