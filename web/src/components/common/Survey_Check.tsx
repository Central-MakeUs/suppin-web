import { COLORS } from '@/theme';
import { useState } from 'react';
import styled from 'styled-components';
import checkRect from '../../assets/checkRect.png';
import checkRound from '../../assets/checkRound.png';
import { Button } from './button';

interface SurveyCheckProps {
  $variant: 'round' | 'rect';
}

export const SurveyCheck = ({ $variant }: SurveyCheckProps) => {
  const [isChecked, setIsChecked] = useState<string | null>(null);

  const toggleCheck = (check: string) => {
    setIsChecked(check);
  };

  return (
    <div>
      <Button
        variant="checkRect"
        isActive={isChecked === 'yes'}
        onClick={() => toggleCheck('yes')}
      >
        <CheckContainer>
          {isChecked === 'yes' ? (
            <CheckImage
              src={$variant === 'round' ? checkRound : checkRect}
              alt="Checked"
            />
          ) : (
            <EmptyShape $variant={$variant} />
          )}
        </CheckContainer>
        네, 동의합니다.
      </Button>
      <Button
        variant="checkRect"
        isActive={isChecked === 'no'}
        onClick={() => toggleCheck('no')}
      >
        <CheckContainer>
          {isChecked === 'no' ? (
            <CheckImage
              src={$variant === 'round' ? checkRound : checkRect}
              alt="Checked"
            />
          ) : (
            <EmptyShape $variant={$variant} />
          )}
        </CheckContainer>
        아니요, 동의하지 않습니다.
      </Button>
    </div>
  );
};

const CheckContainer = styled.div`
  margin-right: 10px;
`;

const CheckImage = styled.img`
  width: 20px;
  height: 20px;
`;

const EmptyShape = styled.div<{ $variant: 'round' | 'rect' }>`
  width: 20px;
  height: 20px;
  border: 1px solid ${COLORS.Gray3};
  ${props =>
    props.$variant === 'round' &&
    `
    border-radius: 50%;
  `}
  ${props =>
    props.$variant === 'rect' &&
    `
    border-radius: 5px;
  `}
`;
