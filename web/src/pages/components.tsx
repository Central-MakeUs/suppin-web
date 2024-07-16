import { BtnMainInactive, BtnMainActive } from '../components/common/Btn_main';
import { BtnCheckRound } from '../components/common/Btn_check1';
import { BtnCheckRect } from '../components/common/Btn_check2';
import { Btn_popup } from '../components/common/Btn_popup';
import { Btn_preview } from '../components/common/Btn_preview';
import { Popup } from '../components/common/Popup';
import { Subtitle } from '../components/common/Subtitle';
import {
  BackButton,
  BtnAdd,
  BtnRetry,
  DeleteButton,
  OpenButton,
  ShareButton,
} from '@/components/common/Btn_btns';
import { SurveyCheck } from '@/components/common/Survey_Check1';
import { SurveyCheck2 } from '@/components/common/Survey_Check2';
import { SurveyForm } from '@/components/common/SurveyForm';
import MainCard from '@/components/common/main_card/MainCard';
import { Btn_detail } from '@/components/common/Btn_detail';
import { SubTab } from '@/components/common/SubTab';
import { Hashtag } from '@/components/common/HashTag';
import { SurveyInput } from '@/components/common/SurveyInput';
import { UnderlineInput } from '@/components/common/underLineInput';
import { SurveyTimeInput } from '@/components/common/SurveyTimeInput';

const Components = () => {
  console.log('페이지 로딩 정상');
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '20px',
      }}
    >
      <BtnMainInactive />
      <BtnMainActive />
      <BtnCheckRound />
      <BtnCheckRect />
      <Btn_popup />
      <Btn_preview />
      <Popup />
      <Subtitle />
      <BackButton />
      <DeleteButton />
      <OpenButton />
      <ShareButton />
      <BtnRetry />
      <BtnAdd />
      <SurveyCheck />
      <SurveyCheck2 />
      <SurveyForm />
      <MainCard />
      <Btn_detail />
      <SubTab />
      <Hashtag />
      <SurveyInput placeholder="1. 내용을 입력해주세요" />
      <UnderlineInput placeholder="내용을 입력해주세요" />
      <SurveyTimeInput
        placeholderStart="시작 날짜 선택"
        placeholderEnd="종료 날짜 선택"
      />
    </div>
  );
};

export default Components;
