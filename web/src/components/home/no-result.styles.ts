import { COLORS } from '@/theme';
import styled from 'styled-components';

export const NoResultWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding-bottom: 5rem;

  img {
    width: 12.5rem;
    height: 12.5rem;
    border: 1px solid #d9d9d9;
  }
  p {
    max-width: 9rem;
    white-space: break-spaces;
    color: ${COLORS.Gray2};
    font-size: 1rem;
  }
`;
