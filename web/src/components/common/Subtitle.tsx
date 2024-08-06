import { Button } from '@/components/common/button';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface SubtitleProps {
  title: string;
  backgroundColor?: string;
  onBackClick?: () => void;
}

export const Subtitle = ({
  title,
  backgroundColor,
  onBackClick,
}: SubtitleProps) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(-1); // 기본 동작: 이전 페이지로 이동
    }
  };

  return (
    <Container backgroundColor={backgroundColor}>
      <BackContainer>
        <Button variant="back" onClick={handleBackClick} />
      </BackContainer>
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.div<{ backgroundColor?: string }>`
  width: 100%;
  height: 47px;
  display: flex;
  align-items: center;
  position: relative; /* 자식 요소의 절대 위치를 위한 기준 컨테이너 */
  /* border: 1px solid black; */
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'inherit'}; /* 배경색을 props로 받음 */
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
