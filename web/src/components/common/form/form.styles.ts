import { Label } from '@/components/common/label';
import styled from 'styled-components';

export const StyledFormItem = styled.div`
  margin-bottom: 1rem;
`;

export const StyledFormLabel = styled(Label)<{ $error?: boolean }>`
  color: ${props => (props.$error ? 'red' : 'inherit')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const StyledFormDescription = styled.p`
  font-size: 0.875rem;
  color: #666;
`;

export const StyledFormMessage = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  color: #ff4848;
`;
