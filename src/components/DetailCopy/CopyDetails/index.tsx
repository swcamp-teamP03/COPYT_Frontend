import React, { SetStateAction, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import useCopyDetailQuery from '../../../quries/Copy/useCopyDetailQuery';
import useCreateCopyMutation from '../../../quries/Copy/useCreateCopyMutation';
import { copyListState } from '../../../store/copyListState';
import { CopyDetailResult } from '../../../types/copy';
import Button from '../../common/Button';
import Loading from '../../common/Loading';
import { COPY_LENGTH } from '../../CreateCopy/CreateCopyCondition';
import CopyCountLimitModal from '../../CreateCopy/LimitModal';
import SubmitModal from '../../CreateCopy/SubmitModal';
import * as S from './CopyDetail.stlyes';

interface CopyDetailsProps {
  setAbleOutPage: React.Dispatch<SetStateAction<boolean>>;
}

const CopyDetails = ({ setAbleOutPage }: CopyDetailsProps) => {
  const [copyList, setCopyList] = useRecoilState(copyListState);
  const [showLimitModal, setShowLimitModal] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const { id } = useParams();

  const { data: copyDetail } = useCopyDetailQuery(id);
  const { mutate: createCopytMutate, isLoading } = useCreateCopyMutation({ setCopyList, copyList });

  const isSelected = (title: string) => {
    return title === copyDetail?.type;
  };

  const handleLimitModal = () => {
    setShowLimitModal((prev) => !prev);
  };
  const handleSubmitModal = () => {
    setShowSubmitModal((prev) => !prev);
  };

  const recommendCopy = () => {
    if (!copyDetail || !copyDetail.createCount) return;
    if (copyList.length + copyDetail.createCount > 20) {
      return handleLimitModal();
    }
    setAbleOutPage(true);
    createCopytMutate(copyDetail as CopyDetailResult);
  };

  return (
    <div>
      {isLoading && <Loading />}
      <S.Label>카피그룹명</S.Label>
      <S.GroupName>{copyDetail?.copyGroupName}</S.GroupName>
      <S.Label>브랜드명</S.Label>
      <S.TextBox>
        <span>{copyDetail?.brandName}</span>
      </S.TextBox>
      <S.Label>상품명</S.Label>
      <S.TextBox>
        <span>{copyDetail?.productName}</span>
      </S.TextBox>
      <S.Label>핵심 키워드</S.Label>
      <S.KeywordWrapper>
        {copyDetail?.keyword?.split(',').map((keyword) => (
          <S.Keyword key={keyword}>{keyword}</S.Keyword>
        ))}
      </S.KeywordWrapper>
      <S.FlexLayout>
        <div>
          <S.Label>타겟 연령</S.Label>
          <S.DarkBox>{copyDetail?.targetAge}</S.DarkBox>
        </div>
        <div>
          <S.Label>타겟 성별</S.Label>
          <S.DarkBox>{copyDetail?.targetGender}</S.DarkBox>
        </div>
      </S.FlexLayout>
      <S.FlexLayout>
        <div>
          <S.Label>문장 길이</S.Label>
          <S.CopyTypeContainer>
            {COPY_LENGTH.map((type) => (
              <S.CopyType isSelected={isSelected(type.title)} key={type.title}>
                {type.title}
              </S.CopyType>
            ))}
          </S.CopyTypeContainer>
        </div>
        <div>
          <S.Label>카피 생성 수</S.Label>
          <S.DarkBox>
            <span>{copyDetail?.createCount}</span>
          </S.DarkBox>
        </div>
      </S.FlexLayout>
      <S.CopySubmit>
        <Button title="카피 추천 받기" buttonSize="buttonL" buttonColor="blue" onButtonClick={recommendCopy} />
      </S.CopySubmit>
      <CopyCountLimitModal showLimitModal={showLimitModal} handleLimitModal={handleLimitModal} />
      <SubmitModal showSubmitModal={showSubmitModal} handleSubmitModal={handleSubmitModal} onClickYes={handleSubmitModal} />
    </div>
  );
};

export default CopyDetails;
