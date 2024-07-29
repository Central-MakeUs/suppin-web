import { Label } from '@/components/common/label';
import styled from 'styled-components';

export const StyledFormItem = styled.div`
  margin-bottom: 1rem;
`;

export const StyledFormLabel = styled(Label)<{ $error?: boolean }>`
  color: ${props => (props.$error ? 'red' : 'inherit')};
`;

export const StyledFormDescription = styled.p`
  font-size: 0.875rem;
  color: #666;
`;

export const StyledFormMessage = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: red;
`;
