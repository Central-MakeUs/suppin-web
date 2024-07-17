import { body5Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import styled from 'styled-components';
import Button from './Btn_btns';

export const Hashtag = () => {
  return (
    <Container>
      <Tag>#웃으며</Tag>
      <Button variant="delete" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.Sub2};
  border-radius: 100px;
  padding: 0px 0px 0px 10px;
  gap: 5px;
`;

const Tag = styled.p`
  ${body5Style}
  color: ${COLORS.Main};
  margin: 0; /* 기본 마진 제거 */
`;
