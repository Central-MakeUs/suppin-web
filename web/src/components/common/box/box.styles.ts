import { COLORS } from '@/theme';
import styled from 'styled-components';

export const BoxWrapper = styled.div`
  width: 100%;
  height: 3.875rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  background: ${COLORS.Gray6};
  padding: 12px 20px;
  border-radius: 10px;
`;
