export interface SignUpInit {
  email: string;
  password: string;
  passwordCheck: string;
  company: string;
  username: string;
  phoneNumber: string;
  certification: boolean;
}

export interface Email {
  email: string;
  certificationNumber: number;
}

export interface SignUpAction {
  type: 'CHANGE_INPUT' | 'CERTIFICATION';
  key: string;
  value: string | boolean;
}

export const signupInit = {
  email: '',
  company: '',
  username: '',
  phoneNumber: '',
  password: '',
  passwordCheck: '',
  certification: false,
};

export const singUpReducer: React.Reducer<SignUpInit, SignUpAction> = (state, action) => {
  switch (action.type) {
    case 'CERTIFICATION':
      if (typeof action.value === 'boolean') return { ...state, certification: action.value };
      else return { ...state };
    case 'CHANGE_INPUT':
      if (typeof action.value === 'string') return { ...state, [action.key]: action.value };
      else return { ...state };
  }
};
