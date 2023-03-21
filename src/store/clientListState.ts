import { atom } from 'recoil';
import { ClientListType } from '../types/client';

type ClientListState = ClientListType[];

export const clientListState = atom<ClientListState>({
  key: 'clientListState',
  default: [],
});
