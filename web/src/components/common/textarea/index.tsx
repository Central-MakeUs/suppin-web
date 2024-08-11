import React from 'react';
import { StyledTextarea } from './textarea.styles';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    return <StyledTextarea ref={ref} {...props} />;
  }
);
