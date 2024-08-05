import { Button } from '@/components/common/button';
import { body1Style, body3Style, head4Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import React, { useState } from 'react';
import styled from 'styled-components';
import { SurveyTimeInput } from '../common/SurveyTimeInput';

export const WinnerContent = () => {
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddHashtag = () => {
    if (inputValue.trim() !== '') {
      setHashtags([...hashtags, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleRemoveHashtag = (index: number) => {
    setHashtags(hashtags.filter((_, i) => i !== index));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <Container>
        <Container2>
          <Label>당첨자 수</Label>
          <ParticipantInfo>참여자 300</ParticipantInfo>
        </Container2>
        <Input1 placeholder="당첨자 수를 입력해주세요" />
      </Container>
      <Container3>
        <Section>
          <SettingLabel>
            <Checkbox type="checkbox" defaultChecked />
            기간 설정
          </SettingLabel>
          <SurveyTimeInput
            placeholderStart={'날짜 선택'}
            placeholderEnd={'날짜 선택'}
          />
        </Section>

        <Section>
          <SettingLabel>
            <Checkbox type="checkbox" />
            최소 글자수
          </SettingLabel>
          <Input2 placeholder="글자 수를 입력해주세요" />
        </Section>

        <Section>
          <SettingLabel>
            <Checkbox type="checkbox" defaultChecked />
            키워드 설정
          </SettingLabel>
          <KeywordInputWrapper>
            <Input2
              placeholder="키워드를 입력해주세요"
              value={inputValue}
              onChange={handleInputChange}
            />
            <AddButton onClick={handleAddHashtag}>추가</AddButton>
          </KeywordInputWrapper>
          <HashtagsContainer>
            {hashtags.map((tag, index) => (
              <Hashtag key={index}>
                #{tag}
                <Button
                  variant="delete"
                  width="20px"
                  height="20px"
                  onClick={() => handleRemoveHashtag(index)}
                />
              </Hashtag>
            ))}
          </HashtagsContainer>
        </Section>
      </Container3>

      <BtnContainer>
        <SubmitButton>랜덤 추천하기</SubmitButton>
      </BtnContainer>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 136px;
  margin-top: 12px;
  background-color: ${COLORS.Sub2};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 30px 37px 30px 37px;
`;

const Container2 = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Container3 = styled.div`
  display: flex;
  gap: 23px;
  flex-direction: column;
  padding: 0px 37px;
  margin-top: 27px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.p`
  ${head4Style}
  color: ${COLORS.Main};
`;

const ParticipantInfo = styled.p`
  ${body3Style}
  color: ${COLORS.Gray3};
`;

const Input1 = styled.input`
  width: 100%;
  height: 46px;
  padding: 10px;
  border: 1px solid #215bfb;
  border-radius: 10px;
  background-color: ${COLORS.white};
  color: ${COLORS.Gray1};
  font-size: 14px;
  margin-top: 8px;
  outline: none;

  ::placeholder {
    color: ${COLORS.Gray4};
  }
`;

const Input2 = styled.input`
  width: 100%;
  height: 46px;
  padding: 10px;
  border: 1px solid ${COLORS.Gray5};
  border-radius: 5px;
  background-color: ${COLORS.Gray6};
  color: ${COLORS.Gray1};
  font-size: 14px;
  outline: none;

  ::placeholder {
    color: ${COLORS.Gray4};
  }
`;

const SettingLabel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  ${body1Style}
  color: ${COLORS.Gray1};
`;

const Checkbox = styled.input`
  margin-right: 8px;
  width: 20px;
  height: 20px;
`;

const KeywordInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AddButton = styled.button`
  display: flex;
  width: 63px;
  height: 46px;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.Main};
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
`;

const HashtagsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const Hashtag = styled.div`
  display: flex;
  align-items: center;
  background-color: ${COLORS.Sub2};
  color: ${COLORS.Main};
  padding: 5px 10px;
  border-radius: 20px;
  gap: 10px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const SubmitButton = styled.button`
  width: 350px;
  height: 50px;
  padding: 15px;
  background-color: ${COLORS.Gray3};
  color: ${COLORS.white};
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
`;

export default WinnerContent;
