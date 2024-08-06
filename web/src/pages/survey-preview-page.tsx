import { Btn_popup } from '@/components/common/Btn_popup';
import { Subtitle } from '@/components/common/Subtitle';
import Tag from '@/components/common/Tags';
import { body3Style, body4Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import styled from 'styled-components';
import calander1 from '../assets/calander1.png';

export const SurveyPreviewPage = () => {
  const content = `스윗미업 푸드트럭 이벤트에 참여해주셔서 감사합니다. 블라블라스윗미업 푸드트럭 이벤트에 참여해주셔서 감사합니다. 블라블라스윗미업 푸드트럭 이벤트에 참여해주셔서 감사합니다. 블라블라스윗미업 푸드트럭 이벤트에 참여해주셔서 감사합니다. 블라블라`;
  return (
    <PageContainer>
      <Subtitle title="설문 미리보기" />
      <SubContainer>
        <Content>
          <TextAreaContainer>
            <TitleContainer>스윗미업 푸드트럭 이벤트</TitleContainer>
            <ContentContainer>{content}</ContentContainer>
            <DateContainer>
              {/* 달력 이미지 */}
              <img src={calander1} width="34px" alt="달력" />
              <DateContainer2>
                {/* 이벤트 진행기간 글자 */}
                <DatePeriod>이벤트 진행 기간</DatePeriod>
                {/* 이벤트 진행기간 날짜 */}
                <DateText>2024. 6. 20 13:00 ~ 2024. 7. 01 17:00</DateText>
              </DateContainer2>
              <DateContainer2>
                {/* 당첨자 발표일 글자 */}
                <DatePeriod>당첨자 발표일</DatePeriod>
                {/* 당첨자 발표일 날짜 */}
                <DateText>2024. 7. 4 17:00</DateText>
              </DateContainer2>
            </DateContainer>
          </TextAreaContainer>
        </Content>
        <Content2>
          <Tag label="정보 수집 동의" $variant="default" />
          <ContentContainer>{content}</ContentContainer>
          <AgreeContainer>
            <AgreeButton>
              <input type="radio" name="agree" />
              네, 동의합니다.
            </AgreeButton>
            <AgreeButton>
              <input type="radio" name="agree" />
              아니요, 동의하지 않습니다.
            </AgreeButton>
          </AgreeContainer>
        </Content2>
        <Btn_popup
          onClick={() => alert('다음으로 버튼 클릭')}
          text="다음으로"
          width="350px"
        />
      </SubContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div``;

const SubContainer = styled.div`
  background-color: ${COLORS.Sub2};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 0px 36px 0px;
`;

const Content = styled.div`
  width: 350px;
  max-height: 500px;
  border-radius: 10px;
  border: 1px solid ${COLORS.Gray5};
  background-color: ${COLORS.white};
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
  padding: 20px;
`;

const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TitleContainer = styled.p`
  font-size: 24px;
  font-weight: 500;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-height: 120px;
  ${body4Style}
  margin-top: 26px;
`;

const DateContainer = styled.div`
  width: 100%;
  background-color: ${COLORS.Gray6};
  border-radius: 10px;
  height: 175px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
`;

const DateContainer2 = styled.div`
  margin-top: 10px;
`;
const DatePeriod = styled.p`
  ${body3Style}
  color: ${COLORS.Gray2};
`;
const DateText = styled.p`
  ${body4Style}
  color: ${COLORS.Gray2};
  margin-top: 4px;
`;

const Content2 = styled.div`
  width: 350px;
  min-height: 250px;
  border-radius: 10px;
  border: 1px solid #e9eaee;
  background-color: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
  padding: 20px;
`;

const AgreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const AgreeButton = styled.label`
  height: 46px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: ${COLORS.Gray6};
  border: 1px solid ${COLORS.Gray5};
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
  color: ${COLORS.Gray2};
  input {
    margin-right: 10px;
  }
`;
