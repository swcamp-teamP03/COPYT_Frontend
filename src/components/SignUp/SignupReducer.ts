export interface SignUpInit {
  email: string;
  password: string;
  passwordCheck: string;
  company: string;
  username: string;
  mainPhoneNumber: string;
}

export interface Email {
  email: string;
  certificationNumber: number;
}

export interface SignUpAction {
  type: 'CHANGE_INPUT';
  key: string;
  value: string;
}

export const signupInit = {
  email: '',
  company: '',
  username: '',
  mainPhoneNumber: '',
  password: '',
  passwordCheck: '',
};
export const singUpReducer: React.Reducer<SignUpInit, SignUpAction> = (state, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return { ...state, [action.key]: action.value };
  }
};
