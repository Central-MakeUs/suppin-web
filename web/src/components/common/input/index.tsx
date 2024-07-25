import { StyledInput } from '@/components/common/input/input.styles';
import * as React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <StyledInput type={type} className={className} ref={ref} {...props} />
    );
  }
);

Input.displayName = 'Input';
