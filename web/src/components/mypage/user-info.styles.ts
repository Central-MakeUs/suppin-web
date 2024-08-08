import { body1Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import styled from 'styled-components';

export const Information = styled.div`
  ${body1Style}
  color: ${COLORS.Gray1};
  border-bottom: 1px solid ${COLORS.Gray5};
  padding: 30px 0px 30px 0px;
`;

export const BasicInfo = styled.div`
  margin-bottom: 20px;
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 27px;
`;
export const Info = styled.p`
  ${body1Style}
  color: ${COLORS.Gray2};
`;

export const Id = styled.a`
  color: ${COLORS.Gray2};
  text-decoration: none;
`;
