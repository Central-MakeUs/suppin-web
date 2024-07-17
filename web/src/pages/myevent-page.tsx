import Tabs from '@/components/myevent/Tabs';
import BtnPlus from '@/components/common/Btn_plus';
import Header from '@/components/ui/header';
import MainCard from '@/components/common/main_card/MainCard';
import styled from 'styled-components';

const MyEvent = () => {
  return (
    <>
      <Header title="내 이벤트" />
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
