import styled from 'styled-components';
import { Btn_popup } from './Btn_popup';
import { COLORS } from '@/theme';

export const Popup = () => {
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          border: `1px solid ${COLORS.Gray4}`,
          width: '200px',
          height: '150px',
          marginBottom: '20px',
        }}
      ></div>
      <p
        style={{
          marginBottom: '20px',
        }}
      >
        설문이 완성됐어요!
      </p>
      <Btn_popup />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 350px;
  height: 345px;
  border-radius: 16px;
  background-color: white;
  border: 1px solid ${COLORS.Gray4};
`;
