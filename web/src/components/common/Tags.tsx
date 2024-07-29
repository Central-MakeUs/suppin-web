import styled from 'styled-components';
import { COLORS } from '@/theme';

interface TagProps {
  label: string;
  $variant: 'default' | 'completed';
}

const Tag = ({ label, $variant }: TagProps) => {
  return <StyledTag $$variant={$variant}>{label}</StyledTag>;
};

const StyledTag = styled.div<{ $$variant: 'default' | 'completed' }>`
  width: 88px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-weight: 600;
  font-size: 12px;
  background-color: ${props =>
    props.$$variant === 'completed' ? '#FCECEE' : COLORS.Sub2};
  color: ${props =>
    props.$$variant === 'completed' ? '#FF425B' : COLORS.Main};
`;

export default Tag;
