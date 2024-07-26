import styled from 'styled-components';
import { COLORS } from '@/theme';

interface ProgressBarProps {
  currentStep: number;
}

export const ProgressBar = ({ currentStep }: ProgressBarProps) => {
  return (
    <Container>
      <Step active={currentStep === 1}>1</Step>
      <Step active={currentStep === 2}>2</Step>
      <Step active={currentStep === 3}>3</Step>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Step = styled.div<{ active: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 3px;
  background-color: ${({ active }) => (active ? COLORS.Main : COLORS.Gray3)};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`;
