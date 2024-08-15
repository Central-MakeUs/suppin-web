import { COLORS } from '@/theme';
import styled, { css } from 'styled-components';
import { BadgeVariant } from '.';

export const badgeVariants = {
  default: css`
    border: transparent;
    background-color: ${COLORS.Sub2};
    color: ${COLORS.Main};
  `,

  secondary: css`
    border: transparent;
    background-color: ${COLORS.Main};
    color: ${COLORS.white};
  `,
};

export const BadgeBase = styled.div<{ $variant: BadgeVariant }>`
  display: inline-flex;
  align-items: center;
  border-radius: 5px;
  padding: 0.5rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 600;
  width: fit-content;

  ${({ $variant }) => badgeVariants[$variant || 'default']}
`;
