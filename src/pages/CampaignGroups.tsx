import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PageHeader from '../components/common/PageHeader';
import Pagination from '../components/common/Pagination';
import useCampaignsQuery from '../quries/Campaign/useCampaignsQuery';
import CampaginGroupList from '../components/CampaignGroupList';
import ListCount from '../components/common/ListCount';
import NoneList from '../components/common/NoneList';
import { NONE_LIST_TEXT } from '../constants/noneList';

const CapaignGroups = () => {
  const [listCount, setListCount] = useState(10);
  const [pageNum, setPageNum] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const navigate = useNavigate();

  const { data: campaignData } = useCampaignsQuery(pageNum, listCount);

  const goDetail = (id: number) => {
    navigate(`/campaign/${id}`);
  };

  useEffect(() => {
    if (campaignData?.totalCampaignCount) {
      const page = Math.ceil(campaignData?.totalCampaignCount / listCount);
      setTotalPage(page);
    }
  }, [campaignData?.totalCampaignCount]);

  console.log(campaignData);

  return (
    <>
      <PageHeader
        buttonTitle="새 캠페인 생성"
        buttonSize="buttonL"
        onClick={() => {
          navigate('/campaign/create');
        }}
      >
        캠페인 리스트
      </PageHeader>
      <ListCount listCount={listCount} setListCount={setListCount} totalList={campaignData?.totalCampaignCount ?? 0} setPageNum={setPageNum} />
      <ListCategory>
        <div>즐겨찾기</div>
        <div>메세지 유형</div>
        <div>캠페인명</div>
        <div>전체 클릭률</div>
        <div>생성일</div>
        <div>발송일시</div>
        <div>발송상태</div>
      </ListCategory>
      {campaignData?.campaignList.length ? (
        <CampaginGroupList campaignList={campaignData.campaignList} onClickHandler={goDetail} />
      ) : (
        <NoneList title={NONE_LIST_TEXT.campaign.title} subTitle={NONE_LIST_TEXT.campaign.subTitle} />
      )}
      {totalPage > 1 && <Pagination totalPage={totalPage} setPageNum={setPageNum} pageNum={pageNum} />}
    </>
  );
};

export default CapaignGroups;

const ListCategory = styled.div`
  margin-top: 1.5rem;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 2fr 2fr 1fr 1.5fr 1.5fr 1fr;
  margin-bottom: 20px;
  div {
    display: flex;
    justify-content: center;
  }
  div:nth-child(2) {
    gap: 20px;
  }
  div:nth-child(3) {
    justify-content: flex-start;
  }
`;

const NoneSvg = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0px 0px 0px;
`;
