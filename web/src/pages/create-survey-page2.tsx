import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import {
  setDescription,
  resetForm,
  addField,
  updateFieldLabel,
  removeField,
} from '@/store/survey';
import styled from 'styled-components';
import { COLORS } from '@/theme';
import {
  body3Style,
  body4Style,
  body6Style,
  head1Style,
} from '@/styles/global-styles';
import { Subtitle } from '@/components/common/Subtitle';
import { Btn_preview } from '@/components/common/Btn_preview';
import { Btn_popup } from '@/components/common/Btn_popup';
import Tag from '@/components/common/Tags';
import step2 from '../assets/step2.png';
import { useEffect } from 'react';
import { Button } from '@/components/common/button';

const CreateSurveyPageStep2 = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { description, fields } = useSelector(
    (state: RootState) => state.survey
  );

  const handleRemoveField = (index: number) => {
    dispatch(removeField(index));
  };

  const defaultDescription = `
이벤트 응모에 필요한 개인정보 수집에 동의해 주세요.
- 수집 항목: 이벤트 응모 내용(아이디/닉네임), 이름, 휴대전화번호, 우편번호, 배송지
- 수집·이용 목적: 이벤트 당첨자 본인 확인, 경품 수령 조건 확인, 경품 지급, 의견
- 개인정보 이용 및 보유 기간: 경품 지급 완료 후 최대 6개월(지급 내용 및 관련 문의 응답 완료 후 폐기)

*개인정보의 수집 및 이용에 대한 동의를 거부할 수 있으며, 이 경우 이벤트 참여가 어려울 수 있습니다.`;

  // 초기 description 값 설정
  useEffect(() => {
    if (!description) {
      dispatch(setDescription(defaultDescription.trim()));
    }
  }, [dispatch, description]);

  const isFormComplete = description.length > 0;

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    if (value.length <= 500) {
      dispatch(setDescription(value));
    }
  };

  const handleReset = () => {
    const confirmReset = window.confirm('템플릿을 초기화하시겠습니까?');
    if (confirmReset) {
      dispatch(resetForm());
    }
  };

  const handleAddField = () => {
    // dispatch(addField(`항목 ${fields.length + 1}`));
    dispatch(addField('내용을 입력해주세요'));
  };

  return (
    <PageContainer>
      <Subtitle title="설문 생성하기" />
      <Container>
        <img src={step2} style={{ width: '68px' }} alt="Step 2" />
        <Btn_preview />
      </Container>
      <MainContent>
        <Heading>수집할 참여자 정보를</Heading>
        <Heading>입력해주세요</Heading>
      </MainContent>
      <SubContainer>
        <Content>
          <TopSection>
            <Tag label="정보 수집 동의" $variant="default" />
            <Reset onClick={handleReset}>템플릿 초기화하기</Reset>
          </TopSection>
          <Explain>저장한 내용은 추후 기본 템플릿으로 사용할 수 있어요</Explain>
          <TextAreaContainer>
            <TextArea
              placeholder="설명글을 입력해주세요 (최대 500자)"
              value={description}
              onChange={handleDescriptionChange}
            />
            <CharacterCountContainer>
              <CharacterCount>{description.length}</CharacterCount>/ 500
            </CharacterCountContainer>
          </TextAreaContainer>
        </Content>
        <Content2>
          <Tag label="개인 정보 수집" $variant="default" />
          <Comment>수집할 참여자 정보를 입력해주세요</Comment>
          {fields.map((field, index) => (
            <Form key={index}>
              {/* <CheckButton
                $variant={'round'}
                checked={field.checked}
                onChange={() => dispatch(toggleFieldChecked(index))}
              /> */}
              <InputContainer>
                <Input
                  type="text"
                  value={field.label}
                  onChange={e =>
                    dispatch(updateFieldLabel({ index, label: e.target.value }))
                  }
                />
                <Button
                  onClick={() => handleRemoveField(index)}
                  variant={'delete'}
                  width="24px"
                ></Button>
              </InputContainer>
            </Form>
          ))}
          <AddFieldButton onClick={handleAddField}>
            + 항목 추가 생성
          </AddFieldButton>
        </Content2>
        <Btn_popup
          onClick={() => alert('다음으로 버튼 클릭')}
          $isactive={isFormComplete}
          text="다음으로"
          width="350px"
        />
      </SubContainer>
    </PageContainer>
  );
};

export default CreateSurveyPageStep2;

// 스타일 정의
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

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Reset = styled.p`
  ${body3Style}
  color: ${COLORS.Main};
  cursor: pointer;
`;

const Explain = styled.p`
  ${body6Style}
  color: ${COLORS.Gray2};
  margin: 8px 0px 17px 0px;
`;

const TextAreaContainer = styled.div`
  display: flex;
  height: 307px;
  position: relative;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 307px;
  background-color: ${COLORS.Sub3};
  font-size: 14px;
  color: ${COLORS.Gray2};
  resize: none;
  outline: none;
  border: 1px solid ${COLORS.Sub2};
  border-radius: 10px;
  padding: 14px;
`;

const CharacterCountContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 14px;
  color: ${COLORS.Gray2};
`;

const CharacterCount = styled.span`
  color: ${COLORS.Main};
`;

const Content2 = styled.div`
  width: 350px;
  min-height: 205px;
  border-radius: 10px;
  border: 1px solid ${COLORS.Gray5};
  background-color: ${COLORS.white};
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 26px;
  padding: 20px;
`;

const Comment = styled.p`
  ${body3Style}
  font-size: 16px;
  font-weight: 600;
  margin-top: 7px;
  margin-bottom: 20px;
`;

const Form = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid ${COLORS.Gray5};
  border-radius: 10px;
  background-color: ${COLORS.white};
  padding-right: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 46px;
  padding: 0 10px;
  border-radius: 10px;
  border: none;
  color: ${COLORS.Gray1};
  outline: none;
  ${body4Style}
`;

const AddFieldButton = styled.p`
  width: 100%;
  height: 22px;
  color: ${COLORS.Gray2};
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;
  text-decoration: underline;
  display: flex;
  justify-content: flex-end;
`;
