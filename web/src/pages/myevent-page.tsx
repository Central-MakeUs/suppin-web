import Tabs from '@/components/myevent/Tabs';
import BtnPlus from '@/components/common/Btn_plus';
import Header from '@/components/ui/header';

const MyEvent = () => {
  return (
    <>
      <Header title="내 이벤트" />
      <Tabs />
      <BtnPlus />
    </>
  );
};

export default MyEvent;
