import { ClientGroupCreateType } from '../types/client';
import { atom } from 'recoil';

type ClientListState = ClientGroupCreateType[];

export const copyListState = atom<ClientListState>({
  key: 'clientListState',
  default: [],
});
