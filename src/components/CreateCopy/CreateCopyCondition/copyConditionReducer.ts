export interface CopyConditionAction {
  type: 'CHANGE_VALUE' | 'ADD_KEYWORD' | 'REMOVE_KEYWORD';
  key: string;
  value: string | number;
}

export interface CopyConditionInit {
  copyGroupName: string;
  brandName: string;
  sector: string;
  productName: string;
  keyword: string[];
  createCount: number;
  type: string;
  targetAge: string;
  targetGender: string;
}

export const copyConditionReducer: React.Reducer<CopyConditionInit, CopyConditionAction> = (state, action) => {
  switch (action.type) {
    case 'CHANGE_VALUE':
      return { ...state, [action.key]: action.value };
    case 'ADD_KEYWORD':
      if (typeof action.value === 'string') {
        return { ...state, [action.key]: state.keyword.concat(action.value) };
      }
    case 'REMOVE_KEYWORD':
      return { ...state, [action.key]: state.keyword.filter((keyword) => keyword !== action.value) };
  }
};

export const copyConditionInit = {
  copyGroupName: '',
  brandName: '',
  sector: '',
  productName: '',
  keyword: [],
  createCount: 3,
  type: '짧게',
  targetAge: '10대',
  targetGender: '여성',
};
