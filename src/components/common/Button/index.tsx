import React from 'react';
import { HeaderButton } from './Button.style';

interface ButtonProps {
  title: string;
  buttonSize?: 'buttonS' | 'buttonM' | 'buttonL';
  buttonColor: 'black' | 'white';
  onButtonClick?: () => void;
  isDisabled?: boolean;
  borderRadius?: string;
}

const Button: React.FC<ButtonProps> = ({ title, buttonSize = 'buttonM', buttonColor = 'black', onButtonClick, isDisabled = false, borderRadius = '4px' }) => {
  return (
    <div>
      <HeaderButton buttonSize={buttonSize} buttonColor={buttonColor} onClick={onButtonClick} disabled={isDisabled} borderRadius={borderRadius}>
        {title}
      </HeaderButton>
    </div>
  );
};

export default Button;
