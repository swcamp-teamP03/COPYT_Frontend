import React, { ReactNode } from 'react';
import Button from '../Button';
import * as S from './PageHeader.style';

export interface PageHeaderProps {
  children: string | ReactNode;
  buttonTitle?: string;
  buttonSize?: 'buttonS' | 'buttonM' | 'buttonL';
  buttonColor?: 'white' | 'black';
  isDisabled?: boolean;
  onClick?: () => void;
}

const PageHeader = ({ children, buttonTitle, buttonSize = 'buttonS', buttonColor = 'black', onClick, isDisabled = false }: PageHeaderProps) => {
  return (
    <>
      <S.Container>
        <S.HeadTitle>{children}</S.HeadTitle>
        {buttonTitle && <Button buttonColor={buttonColor} buttonSize={buttonSize} isDisabled={isDisabled} onButtonClick={onClick} title={buttonTitle} />}
      </S.Container>
    </>
  );
};

export default PageHeader;
