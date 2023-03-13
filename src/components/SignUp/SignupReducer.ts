export interface SignUpInit {
  email: string;
  brandName: string;
  managerPhoneNumber: string;
  manager: string;
  mainPhoneNumber: string;
  password: string;
  passwordCheck: string;
}
export interface SignUpAction {
  type: 'CHANGE_INPUT';
  key: string;
  value: string;
}

export const signupInit = {
  email: '',
  brandName: '',
  managerPhoneNumber: '',
  manager: '',
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
