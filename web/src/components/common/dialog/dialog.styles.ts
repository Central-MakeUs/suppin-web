import * as DialogPrimitive from '@radix-ui/react-dialog';
import styled from 'styled-components';

export const StyledDialogOverlay = styled(DialogPrimitive.Overlay)`
  position: fixed;
  inset: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.8);
  &[data-state='open'] {
    animation: fadeIn 0.2s ease-out;
  }
  &[data-state='closed'] {
    animation: fadeOut 0.2s ease-in;
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
  border: 1px solid #e5e7eb;
  background-color: #ffffff;
  padding: 1.5rem;
  box-shadow:
    0px 10px 15px rgba(0, 0, 0, 0.1),
    0px 4px 6px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s,
    opacity 0.2s;

  &[data-state='open'] {
    animation:
      zoomIn 0.2s ease-out,
      fadeIn 0.2s ease-out;
  }
  &[data-state='closed'] {
    animation:
      zoomOut 0.2s ease-in,
      fadeOut 0.2s ease-in;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes zoomIn {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes zoomOut {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.95);
    }
  }

  @media (min-width: 640px) {
    border-radius: 0.5rem;
  }
`;

export const StyledDialogCloseButton = styled(DialogPrimitive.Close)`
  position: absolute;
  right: 1rem;
  top: 1rem;
  border-radius: 0.125rem;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #3b82f6;
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
  gap: 0.5rem;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: flex-end;
    gap: 0.5rem;
  }
`;

export const StyledDialogTitle = styled(DialogPrimitive.Title)`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5;
  margin: 0;
`;

export const StyledDialogDescription = styled(DialogPrimitive.Description)`
  font-size: 0.875rem;
  color: #6b7280;
`;
