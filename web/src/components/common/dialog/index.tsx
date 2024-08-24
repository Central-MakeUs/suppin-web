import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as React from 'react';
import {
  StyledDialogContent,
  StyledDialogDescription,
  StyledDialogFooter,
  StyledDialogHeader,
  StyledDialogOverlay,
  StyledDialogTitle,
} from './dialog.styles';

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;

export const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>((props, ref) => <StyledDialogOverlay ref={ref} {...props} />);
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ children, ...props }, ref) => (
  <DialogPortal>
    <StyledDialogOverlay />
    <StyledDialogContent ref={ref} {...props}>
      {children}
    </StyledDialogContent>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

export const DialogHeader = ({ ...props }) => <StyledDialogHeader {...props} />;
DialogHeader.displayName = 'DialogHeader';

export const DialogFooter = ({ ...props }) => <StyledDialogFooter {...props} />;
DialogFooter.displayName = 'DialogFooter';

export const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>((props, ref) => <StyledDialogTitle ref={ref} {...props} />);
DialogTitle.displayName = DialogPrimitive.Title.displayName;

export const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>((props, ref) => <StyledDialogDescription ref={ref} {...props} />);
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export { Dialog, DialogPortal, DialogTrigger };
