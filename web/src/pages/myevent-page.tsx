import BtnPlus from '@/components/common/Btn_plus';
import MainCard from '@/components/common/main_card/MainCard';
import Tabs from '@/components/myevent/Tabs';
import styled from 'styled-components';

const MyEvent = () => {
  return (
    <>
      <Tabs />
      <Container>
        <MainCard />
      </Container>
      <BtnPlus />
    </>
  );
};

export default MyEvent;

const Container = styled.div`
  width: '100%';
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
