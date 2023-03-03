export interface ConditionAction {
  type: 'CHANGE_INPUT' | 'CHANGE_TYPE' | 'CHANGE_LENGTH' | 'CHANGE_COUNT' | 'ADD_KEYWORD' | 'REMOVE_KEYWORD';
  key: string;
  value: string;
}

export interface ConditionInit {
  copyGroupName: string;
  brandName: string;
  sector: string;
  productName: string;
  keyword: string[];
  createCount: string;
  copyLength: string;
  type: string;
}
export const conditionReducer: React.Reducer<ConditionInit, ConditionAction> = (state, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return { ...state, [action.key]: action.value };
    case 'CHANGE_TYPE':
      return { ...state, [action.key]: action.value };
    case 'CHANGE_LENGTH': {
      const prev = Number(state.copyLength);
      return { ...state, [action.key]: action.value === 'plus' ? String(prev + 50) : String(prev - 50) };
    }
    case 'CHANGE_COUNT':
      return { ...state, [action.key]: action.value };
    case 'ADD_KEYWORD':
      return { ...state, [action.key]: state.keyword.concat(action.value) };
    case 'REMOVE_KEYWORD':
      return { ...state, [action.key]: state.keyword.filter((keyword) => keyword !== action.value) };
  }
};

export const conditionInit = {
  copyGroupName: '',
  brandName: '',
  sector: '',
  productName: '',
  keyword: [],
  createCount: '3',
  copyLength: '100',
  type: '리뷰',
};
