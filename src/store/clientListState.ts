import { atom } from 'recoil';

export interface ClientListState {
  groupName: string;
}

export const clientListState = atom({
  key: 'clientListState',
  default: [] as ClientListState[],
});
