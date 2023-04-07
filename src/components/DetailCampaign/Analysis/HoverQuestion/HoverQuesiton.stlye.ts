import styled from 'styled-components';

export const QuestioMark = styled.div`
  position: absolute;
  cursor: pointer;
  right: -10px;
  top: 0px;
  width: 12px;
  height: 12px;
`;

interface QuestionInfoProps {
  isHover: boolean;
}

export const QuestionInfo = styled.div<QuestionInfoProps>`
  background-image: url("data:image/svg+xml,%3Csvg width='233' height='120' viewBox='0 0 233 120' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_d_843_3684)'%3E%3Cmask id='path-1-inside-1_843_3684' fill='white'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.2695 4C6.95582 4 4.26953 6.68629 4.26953 10V100.627C4.26953 103.941 6.95582 106.627 10.2695 106.627H115.186L120.188 115.291C120.572 115.957 121.535 115.957 121.92 115.291L126.921 106.627H222.999C226.313 106.627 228.999 103.941 228.999 100.627V10C228.999 6.68629 226.313 4 222.999 4H10.2695Z'/%3E%3C/mask%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.2695 4C6.95582 4 4.26953 6.68629 4.26953 10V100.627C4.26953 103.941 6.95582 106.627 10.2695 106.627H115.186L120.188 115.291C120.572 115.957 121.535 115.957 121.92 115.291L126.921 106.627H222.999C226.313 106.627 228.999 103.941 228.999 100.627V10C228.999 6.68629 226.313 4 222.999 4H10.2695Z' fill='white'/%3E%3Cpath d='M115.186 106.627L116.052 106.127L115.763 105.627H115.186V106.627ZM120.188 115.291L119.322 115.791L119.322 115.791L120.188 115.291ZM121.92 115.291L122.786 115.791L122.786 115.791L121.92 115.291ZM126.921 106.627V105.627H126.344L126.055 106.127L126.921 106.627ZM5.26953 10C5.26953 7.23857 7.50811 5 10.2695 5V3C6.40354 3 3.26953 6.134 3.26953 10H5.26953ZM5.26953 100.627V10H3.26953V100.627H5.26953ZM10.2695 105.627C7.50811 105.627 5.26953 103.389 5.26953 100.627H3.26953C3.26953 104.493 6.40354 107.627 10.2695 107.627V105.627ZM115.186 105.627H10.2695V107.627H115.186V105.627ZM121.054 114.791L116.052 106.127L114.32 107.127L119.322 115.791L121.054 114.791ZM121.054 114.791H121.054L119.322 115.791C120.091 117.124 122.016 117.124 122.786 115.791L121.054 114.791ZM126.055 106.127L121.054 114.791L122.786 115.791L127.787 107.127L126.055 106.127ZM222.999 105.627H126.921V107.627H222.999V105.627ZM227.999 100.627C227.999 103.389 225.761 105.627 222.999 105.627V107.627C226.865 107.627 229.999 104.493 229.999 100.627H227.999ZM227.999 10V100.627H229.999V10H227.999ZM222.999 5C225.761 5 227.999 7.23858 227.999 10H229.999C229.999 6.13401 226.865 3 222.999 3V5ZM10.2695 5H222.999V3H10.2695V5Z' fill='%23DFDFDF' mask='url(%23path-1-inside-1_843_3684)'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_d_843_3684' x='0.269531' y='0' width='232.73' height='119.791' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset/%3E%3CfeGaussianBlur stdDeviation='2'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_843_3684'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_843_3684' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E%0A");
  display: ${(props) => (props.isHover ? 'block' : 'none')};
  position: absolute;
  width: 233px;
  height: 120px;
  left: 35px;
  top: -125px;
  color: black;
  z-index: 1000;
`;

export const QuestionText = styled.div`
  max-width: 183px;
  padding: 25px;
  width: 100%;
  line-height: 23px;
  white-space: pre-wrap;
  font-size: 14px;
`;
