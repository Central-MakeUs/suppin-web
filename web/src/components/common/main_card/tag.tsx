import styled from 'styled-components';
import { COLORS } from '@/theme';

export const Tag = () => {
  return <TagContainer>댓글수집형</TagContainer>;
};

const TagContainer = styled.div`
  width: 72px;
  height: 26px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: bold;
  margin-right: 10px;
  background-color: ${COLORS.Sub2};
  color: ${COLORS.Main};
  display: flex;
  align-items: center;
  justify-content: center;
`;
