import * as LabelPrimitive from '@radix-ui/react-label';
import React from 'react';
import styled from 'styled-components';
import { labelStyle } from './label.styles';

const StyledLabel = styled(LabelPrimitive.Root)`
  ${labelStyle}
`;

export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <StyledLabel ref={ref} className={className} {...props} />
));

Label.displayName = LabelPrimitive.Root.displayName;
