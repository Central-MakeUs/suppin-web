import checkRect from '@/assets/checkRect.png';
import checkRound from '@/assets/checkRound.png';
import { ComponentProps, useState } from 'react';
import { StyledButton } from './button.styles';

export type ButtonType =
  | 'back'
  | 'delete'
  | 'open'
  | 'share'
  | 'retry'
  | 'add'
  | 'checkRect'
  | 'checkRound';

type ButtonProps = ComponentProps<'button'> & {
  variant: ButtonType;
  width?: string;
  height?: string;
  isActive?: boolean;
};

// Btn_btn에 여러개로 나눠져있던 버튼 통일
export const Button = ({
  variant,
  width,
  height,
  children,
  isActive,
  ...props
}: ButtonProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(isActive || false);

  const toggleCheck = () => {
    if (!variant.startsWith('check')) {
      return;
    }
    setIsChecked(prevState => !prevState);
  };

  return (
    <StyledButton
      onClick={toggleCheck}
      {...props}
      $variant={variant}
      width={width}
      height={height}
    >
      {isChecked ? (
        <img
          src={variant === 'checkRound' ? checkRound : checkRect}
          alt="Checked"
        />
      ) : (
        <div className="empty" />
      )}
      {children}
    </StyledButton>
  );
};
