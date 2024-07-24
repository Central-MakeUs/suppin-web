import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { COLORS } from '@/theme';
import {
  body2Style,
  body5Style,
  body6Style,
  head1Style,
} from '@/styles/global-styles';

import { Subtitle } from '@/components/common/Subtitle';
import { Btn_preview } from '@/components/common/Btn_preview';
import { Btn_popup } from '@/components/common/Btn_popup';
import { CheckButton } from '@/components/common/Btn_check';
import Tag from '@/components/common/Tags';
import step2 from '../assets/step2.png';

const CreateSurveyPageStep2 = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [fields, setFields] = useState<string[]>([
    '아이디 (필수)',
    '이름 (필수)',
    '주소 (필수)',
    '연락처 (필수)',
  ]);

  useEffect(() => {
    if (title && description && startDate && endDate) {
      setIsFormComplete(true);
    } else {
      setIsFormComplete(false);
    }
  }, [title, description, startDate, endDate]);

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    if (value.length <= 500) {
      setDescription(value);
    }
  };

  const handleReset = () => {
    const confirmReset = window.confirm('템플릿을 초기화하시겠습니까?');
    if (confirmReset) {
      setTitle('');
      setDescription('');
      setStartDate(null);
      setEndDate(null);
    }
  };

  const handleAddField = () => {
    setFields([...fields, `항목 ${fields.length + 1}`]);
  };

  return (
    <PageContainer>
      <Subtitle title="설문 생성하기" />
      <Container>
        <img src={step2} style={{ width: '68px' }}></img>
        <Btn_preview />
      </Container>
      <MainContent>
        <Heading>수집할 참여자 정보를</Heading>
        <Heading>입력해주세요</Heading>
      </MainContent>
      <SubContainer>
        <Content>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Tag label="정보 수집 동의" $variant="default" />
            <Reset onClick={handleReset}>템플릿 초기화하기</Reset>
          </div>
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
              <CheckButton $variant={'round'} />
              <Input key={index} type="text" placeholder={field} />
            </Form>
          ))}
          <AddFieldButton onClick={handleAddField}>
            + 항목 추가 생성
          </AddFieldButton>
        </Content2>
        <Btn_popup
          onClick={() => alert('다음으로 버튼 클릭')}
          isActive={isFormComplete}
          text="다음으로"
          width="350px"
        />
      </SubContainer>
    </PageContainer>
  );
};

export default CreateSurveyPageStep2;

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

const Reset = styled.p`
  ${body5Style}
  color: ${COLORS.Main};
  cursor: pointer;
`;

const Explain = styled.p`
  ${body6Style}
  color: ${COLORS.Gray2};
  margin: 8px 0px 20px 0px;
`;

const TextAreaContainer = styled.div`
  width: 100%;
  position: relative;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 500px;
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
  ${body2Style}
  font-size: 16px;
  font-weight: 600;
  margin-top: 7px;
  margin-bottom: 20px;
`;

const Form = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${COLORS.Gray4};
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  color: ${COLORS.Gray1};
  outline: none;
`;

const AddFieldButton = styled.p`
  width: 95px;
  height: 22px;
  color: ${COLORS.Gray2};
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 16px;
  text-decoration: underline;
`;
