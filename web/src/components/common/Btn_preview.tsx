import { COLORS } from '@/theme';
import styled from 'styled-components';
import { body3Style, body4Style } from '@/styles/global-styles';

export const Btn_preview = () => {
  return (
    <Btn>
      <Preview>미리보기</Preview>
    </Btn>
  );
};

const Btn = styled.button`
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
