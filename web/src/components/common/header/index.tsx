import { ComponentProps } from 'react';
import { HeaderWrapper } from './header.styles';

type HeaderProps = ComponentProps<'header'>;

export const Header = ({ children }: HeaderProps) => {
  return <HeaderWrapper>{children}</HeaderWrapper>;
};
