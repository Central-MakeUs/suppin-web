import { COLORS } from '@/theme';
import styled from 'styled-components';

export const SurveyPreviewWrapper = styled.div`
  height: 100%;

  .content {
    min-height: calc(100% - 47px);
    background-color: ${COLORS.Sub2};
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
