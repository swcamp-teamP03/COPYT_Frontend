import React, { Dispatch, SetStateAction } from 'react';
import { useParams } from 'react-router-dom';
import useCopyDetailQuery from '../../../quries/Copy/useCopyDetailQuery';
import useCreateCopyMutation from '../../../quries/Copy/useCreateCopyMutation';
import { CopyDetailResult, CopyListType } from '../../../types/copy';
import Button from '../../common/Button';
import Loading from '../../common/Loading';
import { COPY_TYPE } from '../../CreateCopy/CreateCopyCondition';
import * as S from './CopyDetail.stlyes';
interface CopyDetailsProps {
  setCopyList: Dispatch<SetStateAction<CopyListType[]>>;
  copyList: CopyListType[];
}

const CopyDetails = ({ setCopyList, copyList }: CopyDetailsProps) => {
  const { id } = useParams();

  const { data: copyDetail } = useCopyDetailQuery(id);
  const { mutate: createCopytMutate, isLoading } = useCreateCopyMutation({ setCopyList, copyList });

  const isSelected = (title: string) => {
    return title === title;
  };

  const recommendCopy = () => {
    if (!copyDetail) return;
    createCopytMutate(copyDetail as CopyDetailResult);
  };

  return (
    <div>
      {isLoading && <Loading />}
      <S.Label>카피그룹명</S.Label>
      <S.GroupName>{copyDetail?.copyGroupName}</S.GroupName>
      <S.Label>브랜드 이름</S.Label>
      <S.TextBox>
        <span>{copyDetail?.brandName}</span>
      </S.TextBox>
      <S.Label>상품명</S.Label>
      <S.TextBox>
        <span>{copyDetail?.productName}</span>
      </S.TextBox>
      <S.Label>필수로 포함할 키워드</S.Label>
      <S.TextBox>
        {copyDetail?.keyword?.split(',').map((keyword) => (
          <S.Keyword key={keyword}>{keyword}</S.Keyword>
        ))}
      </S.TextBox>
      <S.Label>유형</S.Label>
      <S.CopyTypeContainer>
        {COPY_TYPE.map((type) => (
          <S.CopyType isSelected={isSelected(type.title)} key={type.title}>
            {type.title}
          </S.CopyType>
        ))}
      </S.CopyTypeContainer>
      <S.FlexLayout>
        <div>
          <S.Label>생성수</S.Label>
          <S.DarkBox>
            <span>3</span>
          </S.DarkBox>
        </div>
        <div>
          <S.Label>글자수</S.Label>
          <S.DarkBox>
            <span>150</span>
          </S.DarkBox>
        </div>
      </S.FlexLayout>
      <S.CopySubmit>
        <Button title="카피 추천 받기" buttonSize="buttonL" buttonColor="blue" onButtonClick={recommendCopy} />
      </S.CopySubmit>
    </div>
  );
};

export default CopyDetails;
