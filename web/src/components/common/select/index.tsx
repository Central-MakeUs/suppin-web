import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import React from 'react';
import {
  StyledSelectContent,
  StyledSelectItem,
  StyledSelectLabel,
  StyledSelectScrollDownButton,
  StyledSelectScrollUpButton,
  StyledSelectSeparator,
  StyledSelectTrigger,
  StyledSelectViewport,
} from './select.styles';

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>((props, ref) => (
  <StyledSelectTrigger ref={ref} {...props}>
    {props.children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown />
    </SelectPrimitive.Icon>
  </StyledSelectTrigger>
));

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <StyledSelectContent ref={ref} position={position} {...props}>
      <StyledSelectScrollUpButton>
        <ChevronUp />
      </StyledSelectScrollUpButton>
      <StyledSelectViewport>{children}</StyledSelectViewport>
      <StyledSelectScrollDownButton>
        <ChevronDown />
      </StyledSelectScrollDownButton>
    </StyledSelectContent>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>((props, ref) => <StyledSelectLabel ref={ref} {...props} />);
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>((props, ref) => (
  <StyledSelectItem ref={ref} {...props}>
    <SelectPrimitive.ItemIndicator>
      <Check />
    </SelectPrimitive.ItemIndicator>
    <SelectPrimitive.ItemText>{props.children}</SelectPrimitive.ItemText>
  </StyledSelectItem>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>((props, ref) => <StyledSelectSeparator ref={ref} {...props} />);
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  StyledSelectScrollDownButton as SelectScrollDownButton,
  StyledSelectScrollUpButton as SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
};
