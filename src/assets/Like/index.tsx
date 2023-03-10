import React from 'react';
import Checked from './liked.svg';
import UnChecked from './unliked.svg';
import Pinned from './pinned.svg';
import UnPinned from './unpinned.svg';

export const PIN = {
  unpinned: <UnPinned />,
  pinned: <Pinned />,
};

export const FAVORITES = {
  checked: <Checked />,
  unChecked: <UnChecked />,
};
