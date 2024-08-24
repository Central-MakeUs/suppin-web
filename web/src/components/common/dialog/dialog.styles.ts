import { COLORS } from '@/theme';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const StyledDialogOverlay = styled(DialogPrimitive.Overlay)`
  position: fixed;
  inset: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.8);

  &[data-state='open'] {
    animation: ${fadeIn} 0.2s ease;
  }

  &[data-state='closed'] {
    animation: ${fadeOut} 0.2s ease;
  }
`;

export const StyledDialogContent = styled(DialogPrimitive.Content)`
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 50;
  display: grid;
  width: 100%;
  max-width: 32rem;
  transform: translate(-50%, -50%);
  gap: 1rem;
  background-color: ${COLORS.white};
  padding: 1.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;

  &[data-state='open'] {
    animation: ${fadeIn} 0.2s ease;
  }

  &[data-state='closed'] {
    animation: ${fadeOut} 0.2s ease;
  }

  @media (min-width: 640px) {
    border-radius: 0.5rem;
  }
`;

export const StyledDialogClose = styled(DialogPrimitive.Close)`
  position: absolute;
  right: 1rem;
  top: 1rem;
  border-radius: 0.25rem;
  opacity: 0.7;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    pointer-events: none;
  }
`;

export const StyledDialogHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  text-align: center;

  @media (min-width: 640px) {
    text-align: left;
  }
`;

export const StyledDialogFooter = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: flex-end;
    gap: 0.5rem;
  }
`;

export const StyledDialogTitle = styled(DialogPrimitive.Title)`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.25;
`;

export const StyledDialogDescription = styled(DialogPrimitive.Description)`
  font-size: 0.875rem;
  color: ${COLORS.Gray1};
`;

export const StyledXIcon = styled(X)`
  width: 1rem;
  height: 1rem;
`;

export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
