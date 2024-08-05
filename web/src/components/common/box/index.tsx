import { ComponentProps } from 'react';
import { BoxWrapper } from './box.styles';

export const Box = ({ children, ...props }: ComponentProps<'div'>) => {
  return <BoxWrapper {...props}>{children}</BoxWrapper>;
};
