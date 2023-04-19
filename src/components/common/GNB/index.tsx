import React from 'react';
import * as S from './GNB.styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { GNB_SVG } from '../../../assets/GNB';
import Button from '../Button';

const NAV_ITEM = [
  { title: '홈', svg: GNB_SVG.home, url: '/main' },
  { title: '카피 생성', svg: GNB_SVG.copy, url: '/copies' },
  { title: '고객 그룹', svg: GNB_SVG.client, url: '/clients' },
  { title: '캠페인', svg: GNB_SVG.campaign, url: '/campaign' },
];

const CATEGORY = [
  { title: '공지사항', svg: GNB_SVG.notice, url: 'https://blushing-lemming-a63.notion.site/8a69c4f21a934e60844b89e34f641110' },
  { title: '가이드', svg: GNB_SVG.guide, url: 'https://blushing-lemming-a63.notion.site/da6056847179483f810a3550da8f6637' },
  { title: '빠른 문의', svg: GNB_SVG.inquiry, url: 'https://open.kakao.com/o/gFCsw0cf' },
];

const GNB = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const isSelected = (url: string) => {
    return pathname === url;
  };

  const handleLogoutClick = () => {
    localStorage.removeItem('accessToken');
    navigate('/auth');
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <S.GNBContainer>
      <S.Logo onClick={handleGoHome}>{GNB_SVG.logo}</S.Logo>
      <S.NavWrapper>
        {NAV_ITEM.map((item) => (
          <S.NavItem key={item.title} onClick={() => handleNavigation(item.url)} isSelected={isSelected(item.url)}>
            {item.svg}
            {item.title}
          </S.NavItem>
        ))}
      </S.NavWrapper>

      <S.CategoryWrapper>
        <div>
          <hr />
          {CATEGORY.map((item) => (
            <S.CategoryItem
              key={item.title}
              onClick={() => {
                window.open(item.url);
              }}
            >
              <div>{item.svg}</div>
              <span>{item.title}</span>
            </S.CategoryItem>
          ))}
        </div>
      </S.CategoryWrapper>
      <S.ButtonWrapper>
        <span onClick={handleLogoutClick}>로그아웃</span>
      </S.ButtonWrapper>
    </S.GNBContainer>
  );
};

export default GNB;
