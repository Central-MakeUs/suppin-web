import * as SelectPrimitive from '@radix-ui/react-select';
import styled from 'styled-components';

export const StyledSelectTrigger = styled(SelectPrimitive.Trigger)`
  display: flex;
  height: 40px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  border: 1px solid var(--input-border-color);
  background-color: var(--background-color);
  padding: 8px 12px;
  font-size: 14px;
  line-height: 1;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
  outline: none;

  &:focus {
    border-color: var(--ring-color);
    box-shadow: 0 0 0 2px var(--ring-color);
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  & > span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const StyledSelectContent = styled(SelectPrimitive.Content)`
  position: relative;
  z-index: 50;
  max-height: 384px;
  min-width: 8rem;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid var(--popover-border-color);
  background-color: var(--popover-background-color);
  color: var(--popover-foreground-color);
  box-shadow: var(--popover-shadow);

  &[data-state='open'] {
    animation:
      fadeIn 0.2s ease-out,
      zoomIn 0.2s ease-out;
  }

  &[data-state='closed'] {
    animation:
      fadeOut 0.2s ease-in,
      zoomOut 0.2s ease-in;
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
`;

export const StyledSelectViewport = styled(SelectPrimitive.Viewport)`
  padding: 4px;
`;

export const StyledSelectLabel = styled(SelectPrimitive.Label)`
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 600;
`;

export const StyledSelectItem = styled(SelectPrimitive.Item)`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 14px;
  outline: none;
  cursor: default;

  &[data-disabled] {
    pointer-events: none;
    opacity: 0.5;
  }

  &[data-highlighted] {
    background-color: var(--accent-color);
    color: var(--accent-foreground-color);
  }
`;

export const StyledSelectSeparator = styled(SelectPrimitive.Separator)`
  margin: 4px 0;
  height: 1px;
  background-color: var(--muted-color);
`;

export const StyledSelectScrollUpButton = styled(
  SelectPrimitive.ScrollUpButton
)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  cursor: default;
`;

export const StyledSelectScrollDownButton = styled(
  SelectPrimitive.ScrollDownButton
)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  cursor: default;
`;
