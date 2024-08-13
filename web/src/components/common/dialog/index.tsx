import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import * as React from 'react';
import {
  StyledDialogCloseButton,
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

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>((props, ref) => <StyledDialogOverlay ref={ref} {...props} />);

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <StyledDialogContent ref={ref} {...props}>
      {children}
      <StyledDialogCloseButton>
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </StyledDialogCloseButton>
    </StyledDialogContent>
  </DialogPortal>
));

const DialogHeader = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <StyledDialogHeader {...props} />
);

const DialogFooter = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <StyledDialogFooter {...props} />
);

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>((props, ref) => <StyledDialogTitle ref={ref} {...props} />);

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>((props, ref) => <StyledDialogDescription ref={ref} {...props} />);

export {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
