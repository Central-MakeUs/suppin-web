import styled from 'styled-components';
import Button from './Btn_btns';
import { useNavigate } from 'react-router-dom';

interface SubtitleProps {
  title: string;
}

export const Subtitle = ({ title }: SubtitleProps) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <Container>
      <BackContainer>
        <Button variant="back" onClick={handleBackClick} />
      </BackContainer>
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 47px;
  display: flex;
  align-items: center;
  position: relative; /* 자식 요소의 절대 위치를 위한 기준 컨테이너 */
  /* border: 1px solid black; */
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
