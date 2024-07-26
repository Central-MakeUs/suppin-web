import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { COLORS } from '@/theme';
import { body3Style, head1Style } from '@/styles/global-styles';

import { Subtitle } from '@/components/common/Subtitle';
import { Btn_preview } from '@/components/common/Btn_preview';
import { Btn_popup } from '@/components/common/Btn_popup';
import { SingleDatePicker } from '@/components/common/SingleDatePicker';
import { SurveyTimeInput } from '@/components/common/SurveyTimeInput';
import TitleInput from '@/components/common/TitleInput';

import step1 from '../assets/step1.png';

import { RootState, AppDispatch } from '@/store';
import {
  setTitle,
  setDescription,
  setStartDate,
  setEndDate,
} from '@/store/survey';

const CreateSurveyPageStep1 = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { title, description, startDate, endDate } = useSelector(
    (state: RootState) => state.survey
  );
  const isFormComplete =
    title.trim() && description.trim() && startDate && endDate;

  return (
    <PageContainer>
      <Subtitle title="설문 생성하기" />
      <Container>
        <img src={step1} style={{ width: '68px' }}></img>
        <Btn_preview />
      </Container>
      <MainContent>
        <Heading>이벤트 생성을 위한</Heading>
        <Heading>기본정보를 입력해주세요</Heading>
      </MainContent>
      <SubContainer>
        <Content>
          <TitleInput
            placeholder="제목을 입력해주세요"
            value={title}
            onChange={e => dispatch(setTitle(e.target.value))}
          />
          <TextArea
            placeholder="설명글을 입력해주세요 (최대 n자)"
            value={description}
            onChange={e => dispatch(setDescription(e.target.value))}
          />
        </Content>
        <Content2>
          <div>
            <Text1>이벤트 진행 기간</Text1>
            <SurveyTimeInput
              placeholderStart="날짜 선택"
              placeholderEnd="날짜 선택"
              selectedStartDate={startDate}
              selectedEndDate={endDate}
              onChangeStart={(date: Date | null) =>
                dispatch(setStartDate(date))
              }
              onChangeEnd={(date: Date | null) => dispatch(setEndDate(date))}
            />
          </div>
          <div style={{ marginTop: '16px' }}>
            <Text1>당첨자 발표일</Text1>
            <SingleDatePicker
              placeholder="날짜 선택"
              selectedDate={endDate}
              onChange={(date: Date | null) => dispatch(setEndDate(date))}
            />
          </div>
        </Content2>
        <Btn_popup
          onClick={() => alert('다음으로 버튼 클릭')}
          isActive={!!isFormComplete}
          text="다음으로"
          width="350px"
        />
      </SubContainer>
    </PageContainer>
  );
};

export default CreateSurveyPageStep1;

const PageContainer = styled.div``;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  margin-top: 10px;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 14px;
  padding: 0 20px;
`;

const Heading = styled.h1`
  ${head1Style}
`;

const SubContainer = styled.div`
  background-color: ${COLORS.Sub2};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 26px;
  padding: 20px 0px 36px 0px;
`;

const Content = styled.div`
  width: 350px;
  min-height: 250px;
  border-radius: 10px;
  border: 1px solid ${COLORS.Gray5};
  background-color: ${COLORS.white};
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
  padding: 20px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  resize: none;
  font-size: 14px;
  color: ${COLORS.Gray1};
`;

const Content2 = styled.div`
  width: 350px;
  min-height: 205px;
  border-radius: 10px;
  border: 1px solid #f6f7f8;
  background-color: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 26px;
  padding: 10px 20px 20px 20px;
`;

const Text1 = styled.p`
  ${body3Style}
  color: ${COLORS.Gray2};
  margin-top: 7px;
  margin-bottom: 10px;
`;
