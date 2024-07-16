import styled from 'styled-components';
import { COLORS } from '@/theme';

export const Divider = () => {
  return <DividerLine />;
};

const DividerLine = styled.div`
  border-top: 1px solid ${COLORS.Gray4};
  margin: 10px 0;
`;
