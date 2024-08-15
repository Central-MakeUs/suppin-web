// 마이페이지 - 이용약관
import btnDelete from '@/assets/btn_delete.png';
import { body1Style, head3Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import styled from 'styled-components';

const Terms = ({ onClose }: { onClose: () => void }) => {
  return (
    <Overlay>
      <Container>
        <Header>
          <Title>이용약관 확인하기</Title>
          <DeleteButton onClick={onClose}>
            <img src={btnDelete} alt="Delete" />
          </DeleteButton>
        </Header>
        <Content
          href="https://phase-comic-d2b.notion.site/c77adc8b28934f1194b9787150a16364?pvs=4"
          target="blank"
          style={{ marginTop: '20px' }}
        >
          서비스 이용약관
        </Content>
        <Content
          href="https://phase-comic-d2b.notion.site/7ab3169dc4564272b42c0074d86e5806?pvs=4"
          target="blank"
        >
          개인정보 처리방침
        </Content>
      </Container>
    </Overlay>
  );
};

export default Terms;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px 0px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

const Title = styled.h1`
  ${head3Style}
  color: ${COLORS.Gray1};
  flex: 1;
  text-align: center;
`;

const Content = styled.a`
  width: 100%;
  border-bottom: 1px solid ${COLORS.Gray5};
  padding: 20px;
  ${body1Style}
  color: ${COLORS.Gray1};
  font-weight: 600;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;
