import React from 'react';
import { HeaderButton } from './Button.style';

interface PageHeaderProps {
  title: string;
  buttonSize?: 'buttonS' | 'buttonM' | 'buttonL';
  buttonColor?: 'normal' | 'disabled' | 'active' | 'sDisabled' | 'sNormal' | 'sActive';
  onButtonClick?: () => void;
  disabled?: boolean;
  borderRadius?: string;
}

const Button: React.FC<PageHeaderProps> = ({ title, buttonSize = 'buttonM', buttonColor = 'active', onButtonClick, disabled = false, borderRadius = '4px' }) => {
  return (
    <div>
      <HeaderButton buttonSize={buttonSize} buttonColor={disabled ? 'disabled' : buttonColor} onClick={onButtonClick} disabled={disabled} style={{ borderRadius }}>
        {title}
      </HeaderButton>
    </div>
  );
};

export default Button;
