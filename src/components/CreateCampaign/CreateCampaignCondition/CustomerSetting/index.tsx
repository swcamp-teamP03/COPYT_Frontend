import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { SVG } from '../../../../assets';
import { campaignConditionState } from '../../../../store/campaignConditionState';
import Button from '../../../common/Button';
import CollapseContainer from '../../../common/CollapseContainer';
import CustomerGroupModal from '../../CustomerGroupModal';
import * as S from './CustomerSetting.styles';

const WHETER_NOTICE = [
  'A/B 테스트 기능 사용 시, 고객 그룹 내 포함된 고객 수의 50%씩 메세지 A,B 그룹으로 자동으로 나누어져 메세지가 전송됩니다.',
  'A/B 테스트 기능 사용 시, 캠페인 상세 화면에서 메세지 별 성과추이 그래프를 확인할 수 있습니다.',
];

const CustomerSetting = () => {
  const [condition, setCondition] = useRecoilState(campaignConditionState);
  const [showCustomerGroupModal, setShowCustomerGroupModal] = useState(false);

  const handleCustomerGroupModal = () => {
    setShowCustomerGroupModal((prev) => !prev);
  };

  const deleteCustmomerGroup = () => {
    setCondition((prev) => ({
      ...prev,
      customerGroupID: 0,
      customerGroupName: '',
    }));
  };

  const onChangeABTest = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = event.target.value === 'yes' ? true : false;
    setCondition((prev) => ({
      ...prev,
      abTest: result,
    }));
  };

  return (
    <>
      <S.FlexBox>
        <S.Title>
          고객 그룹 선택
          <span>*</span>
        </S.Title>
        <Button buttonColor="white" buttonSize="buttonM" title="고객 그룹 불러오기" onButtonClick={handleCustomerGroupModal} />
      </S.FlexBox>
      {condition.customerGroupName ? (
        <S.GroupBox>
          <span>{condition.customerGroupName}</span>
          <div onClick={deleteCustmomerGroup}>{SVG.closeButton}</div>
        </S.GroupBox>
      ) : (
        <S.NonGroupBox>
          <span>아직 등록된 고객 그룹이 없습니다.</span>
        </S.NonGroupBox>
      )}
      <S.Desc>
        {SVG.exclamation}
        <span>
          전화번호가 식별된
          <S.Red> {condition.customerCnt}</S.Red>
          명을 대상으로 캠페인 발송을 시도합니다.
        </span>
      </S.Desc>
      <S.Desc>
        {SVG.exclamation}
        <span>SMS 수신 동의하지 않은 고객에게는 발송되지 않도록 확인해주세요.</span>
      </S.Desc>
      <S.FlexBox>
        <S.Title>
          A/B 테스트 기능 사용 여부
          <span>*</span>
        </S.Title>
        <S.RadioInput>
          <input type="radio" name="A/B_test" value="yes" onChange={onChangeABTest} checked={condition.abTest} />
          <label>사용</label>
        </S.RadioInput>
        <S.RadioInput>
          <input type="radio" name="A/B_test" value="no" onChange={onChangeABTest} checked={!condition.abTest} />
          <label>사용 안함</label>
        </S.RadioInput>
      </S.FlexBox>
      {WHETER_NOTICE.map((notice, idx) => (
        <S.Desc key={idx}>
          {SVG.exclamation}
          <span>{notice}</span>
        </S.Desc>
      ))}

      <CustomerGroupModal isOpen={showCustomerGroupModal} handler={handleCustomerGroupModal} />
    </>
  );
};

export default CustomerSetting;
