import React from 'react';
import { BadgeBase } from './badge.styles';

export type BadgeVariant = 'default' | 'secondary';

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  variant: BadgeVariant;
};

export const Badge = ({
  className,
  variant = 'default',
  ...props
}: BadgeProps) => {
  return <BadgeBase className={className} $variant={variant} {...props} />;
};
