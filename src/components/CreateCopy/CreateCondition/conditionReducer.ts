export interface ConditionAction {
  type: 'CHANGE_INPUT' | 'CHANGE_TYPE' | 'CHANGE_LENGTH' | 'CHANGE_COUNT';
  key: 'copyGroupName' | 'tag' | 'brandName' | 'sector' | 'productName' | 'keyword' | 'type' | 'createCount' | 'copyLength';
  value: string;
}

export interface InitialState {
  copyGroupName: string;
  tag: string;
  brandName: string;
  sector: string;
  productName: string;
  keyword: string;
  createCount: string;
  copyLength: string;
  type: string;
}
export const conditionReducer: React.Reducer<InitialState, ConditionAction> = (state, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return { ...state, [action.key]: action.value };
    case 'CHANGE_TYPE':
      return { ...state, type: action.value };
    case 'CHANGE_LENGTH':
      return { ...state, copyLength: action.value };
    case 'CHANGE_COUNT':
      return { ...state, createCount: action.value };
  }
};

export const conditionInit = {
  copyGroupName: '',
  tag: '',
  brandName: '',
  sector: '',
  productName: '',
  keyword: '',
  createCount: '3',
  copyLength: '100',
  type: '리뷰',
};
