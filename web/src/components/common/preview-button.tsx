import { body3Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const PreviewButton = ({ onClick }: { onClick?: () => void }) => {
  const router = useNavigate();

  return (
    <PreviewButtonWrapper
      onClick={() => {
        onClick && onClick();
        router('/survey/new?step=preview');
      }}
    >
      <Preview>미리보기</Preview>
    </PreviewButtonWrapper>
  );
};

const PreviewButtonWrapper = styled.button`
  width: 85px;
  height: 34px;
  border: 1px solid ${COLORS.Main};
  border-radius: 110px;
  background-color: white;
`;
const Preview = styled.p`
  color: ${COLORS.Main};
  ${body3Style}
`;
