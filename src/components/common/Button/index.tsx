import React from 'react';
import { HeaderButton } from './Button.style';

interface ButtonProps {
  title: string;
  buttonSize?: 'buttonS' | 'buttonM' | 'buttonL';
  buttonColor: 'blue' | 'white';
  onButtonClick?: () => void;
  isDisabled?: boolean;
  borderRadius?: string;
  type?: 'submit' | 'reset' | 'button';
}

const Button: React.FC<ButtonProps> = ({ title, buttonSize = 'buttonM', buttonColor = 'blue', onButtonClick, isDisabled = false, borderRadius = '4px', type }) => {
  return (
    <div>
      <HeaderButton buttonSize={buttonSize} buttonColor={buttonColor} onClick={onButtonClick} disabled={isDisabled} borderRadius={borderRadius} type={type}>
        {title}
      </HeaderButton>
    </div>
  );
};

export default Button;
