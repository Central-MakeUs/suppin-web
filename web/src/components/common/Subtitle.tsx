import styled from 'styled-components';
import { BackButton } from './Btn_btns';

export const Subtitle = () => {
  return (
    <Container>
      <BackContainer>
        <BackButton />
      </BackContainer>
      <Title>설문 생성하기</Title>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 47px;
  display: flex;
  align-items: center;
  position: relative; /* 자식 요소의 절대 위치를 위한 기준 컨테이너 */
  border: 1px solid black;
`;

const BackContainer = styled.div`
  position: absolute;
  left: 10px;
`;

const Title = styled.h3`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
