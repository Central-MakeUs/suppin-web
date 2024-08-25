import { Button } from '@/components/common/button';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface SubtitleProps {
  title: string | null;
  backgroundColor?: string;
  onBackClick?: () => void;
  showBackButton?: boolean; // 새로 추가된 prop
}

export const Subtitle = ({
  title,
  backgroundColor,
  onBackClick,
  showBackButton = true, // 기본값은 true로 설정하여 뒤로 가기 버튼이 보이도록 설정
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
    <Container $backgroundColor={backgroundColor}>
      {showBackButton && ( // showBackButton이 true일 때만 렌더링
        <BackContainer>
          <Button variant="back" onClick={handleBackClick} />
        </BackContainer>
      )}
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.div<{ $backgroundColor?: string }>`
  width: 100%;
  height: 47px;
  display: flex;
  align-items: center;
  position: relative; /* 자식 요소의 절대 위치를 위한 기준 컨테이너 */
  /* border: 1px solid black; */
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || 'inherit'}; /* 배경색을 props로 받음 */
`;

const BackContainer = styled.div`
  position: absolute;
  left: 10px;
`;

const Title = styled.h3`
  display: flex;
  justify-content: center;
  width: 80%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
