import React from 'react';
import CloseButton from './closeButton.svg';
import ArrowFlutter from './ArrowFlutter.svg';
import Calendar from './Calendar.svg';
import Serch from './Serch.svg';
import Star from './Star.svg';
import UnStar from './UnStar.svg';
import VerticalArrow from './VerticalArrow.svg';
import Highlight from './Highlight.svg';
import DownChevron from './chevron_down.svg';
import Declation from './declation.svg';
import Edit from './edit.svg';
import Copy from './copy.svg';
import Checked from './liked.svg';
import UnChecked from './unliked.svg';
import Plus from './plus.svg';
import Minus from './minus.svg';
import Pinned from './pinned.svg';
import UnPinned from './unpinned.svg';
import LeftChevron from './chevron_left.svg';
import RightChevron from './chevron_right.svg';

export const SVG = {
  closeButton: <CloseButton />,
};

export const CLIENT_SVG = {
  arrowFlutter: <ArrowFlutter />,
  calender: <Calendar />,
  serch: <Serch />,
  star: <Star />,
  unStar: <UnStar />,
  verticalArrow: <VerticalArrow />,
  highlight: <Highlight />,
};

export default SVG;
export const POST_SVG = {
  declation: <Declation />,
  edit: <Edit />,
  copy: <Copy />,
};

export const PIN = {
  unpinned: <UnPinned />,
  pinned: <Pinned />,
};
export const ARITHMETIC = {
  plus: <Plus />,
  minus: <Minus />,
};

export const CHEVRON = {
  down: <DownChevron />,
  verticalArrows: <VerticalArrow />,
  left: <LeftChevron />,
  right: <RightChevron />,
};

export const FAVORITES = {
  checked: <Checked />,
  unChecked: <UnChecked />,
};
