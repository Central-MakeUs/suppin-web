import styled from 'styled-components';
import { COLORS } from '@/theme';

interface TagProps {
  label: string;
  $variant: 'default' | 'completed';
}

const Tag = ({ label, $variant }: TagProps) => {
  return (
    <StyledTag label={label} $$variant={$variant}>
      {label}
    </StyledTag>
  );
};

const getWidth = (label: string) => {
  switch (label) {
    case '댓글 수집형':
      return '72px';
    case '설문형':
      return '52px';
    case '당첨자 선정 완료':
      return '99px';
    default:
      return 'auto';
  }
};

const getBackgroundColor = (label: string, variant: string) => {
  if (variant === 'completed') {
    return '#E63D54';
  }
  return COLORS.Sub2;
};

const getColor = (label: string, variant: string) => {
  if (variant === 'completed') {
    return '#FF425B';
  }
  return COLORS.Main;
};

const StyledTag = styled.div<{
  $$variant: 'default' | 'completed';
  label: string;
}>`
  width: ${props => getWidth(props.label)};
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-weight: 600;
  font-size: 12px;
  background-color: ${props =>
    getBackgroundColor(props.label, props.$$variant)};
  color: ${props => getColor(props.label, props.$$variant)};
`;

export default Tag;
