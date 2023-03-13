import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PageHeader from '../components/common/PageHeader';
import CopyList from '../components/CreateCopy/CopyList';
import CopyDetails from '../components/DetailCopy/CopyDetails';
import useCopyDetailQuery from '../quries/Copy/useCopyDetailQuery';
import { CopyListType } from '../types/copy';
import { Layout } from './Layout.styles';

const DetailCopy = () => {
  const [copyList, setCopyList] = useState<CopyListType[]>([]);
  const { id } = useParams();

  const { data: copyDetail } = useCopyDetailQuery(id);

  useEffect(() => {
    if (copyDetail) {
      setCopyList(copyDetail?.copyList);
    }
  }, [copyDetail?.copyList]);

  return (
    <Layout size="M">
      <PageHeader buttonTitle="저장" buttonSize="buttonM" onClick={() => {}}>
        카피그룹 상세
        <Date>2023/02/25</Date>
      </PageHeader>
      <GridLayout>
        <CopyDetails copyList={copyList} setCopyList={setCopyList} />
        <CopyList copyList={copyList} setCopyList={setCopyList} />
      </GridLayout>
    </Layout>
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
