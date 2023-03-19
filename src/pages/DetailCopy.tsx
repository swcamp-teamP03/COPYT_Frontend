import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import PageHeader from '../components/common/PageHeader';
import CopyList from '../components/CreateCopy/CopyList';
import SubmitModal from '../components/CreateCopy/SubmitModal';
import CopyDetails from '../components/DetailCopy/CopyDetails';
import useCopyDetailQuery from '../quries/Copy/useCopyDetailQuery';
import useUpdateCopyMutation from '../quries/Copy/useUpdateCopyMutation';
import { copyListState } from '../store/copyListState';

const DetailCopy = () => {
  const [copyList, setCopyList] = useRecoilState(copyListState);
  const [showSubmitModa, setShowSubmitModal] = useState(false);
  const { id } = useParams();

  const { data: copyDetail } = useCopyDetailQuery(id);
  const { mutate: updateCopyMutate } = useUpdateCopyMutation();

  const handleSubmitModal = () => {
    setShowSubmitModal((prev) => !prev);
  };

  const onSubmit = () => {
    setShowSubmitModal(true);
    updateCopyMutate({ id, list: copyList });
  };

  useEffect(() => {
    if (copyDetail) {
      setCopyList(copyDetail?.copyList);
    } else {
      setCopyList([]);
    }
  }, [copyDetail?.copyList]);

  return (
    <>
      <PageHeader buttonTitle="저장" buttonSize="buttonM" onClick={onSubmit}>
        카피그룹 상세
        <Date>2023/02/25</Date>
      </PageHeader>
      <GridLayout>
        <CopyDetails />
        <CopyList />
      </GridLayout>
      <SubmitModal showSubmitModal={showSubmitModa} handleSubmitModal={handleSubmitModal} onClickYes={handleSubmitModal} />
    </>
  );
};

export default DetailCopy;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
`;

const Date = styled.span`
  font-size: 16px;
  color: #777777;
  margin-left: 12px;
`;
