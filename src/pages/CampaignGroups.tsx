import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CHEVRON } from '../assets/Chevron';
import PageHeader from '../components/common/PageHeader';
import Pagination from '../components/common/Pagination';
import useCampaignsQuery from '../quries/Campaign/useCampaignsQuery';
import { CAMPAIGN_SVG } from '../assets';

const CapaignGroups = () => {
  const [listCount, setListCount] = useState(10);
  const [pageNum, setPageNum] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const navigate = useNavigate();

  const { data: listData } = useCampaignsQuery(pageNum, listCount);

  const goDetail = (id: number) => {
    navigate(`/campaign/${id}`);
  };

  useEffect(() => {
    if (listData?.totalCampaign) {
      const page = Math.ceil(listData?.totalCampaign / listCount);
      setTotalPage(page);
    }
  }, [listData?.totalCampaign]);

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
      {/* <ListCount listCount={listCount} setListCount={setListCount} totalClient={listData?.totalCampaign ?? 0} /> */}
      <ListCategory>
        <div>즐겨찾기</div>
        <div>
          메세지 유형 <span>{CHEVRON.verticalArrows}</span>
        </div>
        <div>캠페인명</div>
        <div>
          전체 클릭률 <span>{CHEVRON.verticalArrows}</span>
        </div>
        <div>
          생성일 <span>{CHEVRON.verticalArrows}</span>
        </div>
        <div>
          발송일시 <span>{CHEVRON.verticalArrows}</span>
        </div>
        <div>발송상태</div>
      </ListCategory>
      <NoneSvg>{CAMPAIGN_SVG.campaigNone}</NoneSvg>
      {/* {listData ? <CampaginGroupList campaignList={listData.campaignList} onClick={goDetail} /> : { CAMPAIGN_SVG.campaigNone }} */}
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
