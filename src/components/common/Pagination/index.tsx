import React, { Dispatch, SetStateAction } from 'react';
import { CHEVRON } from '../../../assets/Chevron';
import * as S from './Pagination.styles';

interface PaginationProps {
  totalPage: number;
  pageNum: number;
  setPageNum: Dispatch<SetStateAction<number>>;
}

const Pagination = ({ totalPage, setPageNum, pageNum }: PaginationProps) => {
  const pageArray = new Array(totalPage).fill(0).map((num, idx) => (num = idx + 1));

  const onClickLefrChevron = () => {
    setPageNum((prev) => prev - 1);
  };
  const onClickRightChevron = () => {
    setPageNum((prev) => prev + 1);
  };
  const hadlePageNum = (page: number) => {
    setPageNum(page - 1);
  };

  const isSelected = (page: number) => {
    return pageNum + 1 === page;
  };

  const canNotLeftClick = pageNum === 0;
  const canNotRightClick = pageNum + 1 === totalPage;

  return (
    <>
      <S.Layout>
        <S.Button onClick={onClickLefrChevron} disabled={canNotLeftClick}>
          <S.SVGContainer>{CHEVRON.left}</S.SVGContainer>
        </S.Button>
        {pageArray.map((page) => (
          <S.Button key={page} onClick={() => hadlePageNum(page)} isSelected={isSelected(page)}>
            {page}
          </S.Button>
        ))}
        <S.Button onClick={onClickRightChevron} disabled={canNotRightClick}>
          <S.SVGContainer>{CHEVRON.right}</S.SVGContainer>
        </S.Button>
      </S.Layout>
    </>
  );
};

export default Pagination;
