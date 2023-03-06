import React from 'react';
import CloseButton from './closeButton.svg';
import VerticalArrows from './verticalArrows.svg';
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
import UpChevron from './chevron_up.svg';

export const SVG = {
  closeButton: <CloseButton />,
};

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
  verticalArrows: <VerticalArrows />,
  left: <LeftChevron />,
  right: <RightChevron />,
  up: <UpChevron />,
};

export const FAVORITES = {
  checked: <Checked />,
  unChecked: <UnChecked />,
};
