import cancelImg from '@/assets/cancel.svg';
import step2 from '@/assets/step2.png';
import { Subtitle } from '@/components/common/Subtitle';
import { PreviewButton } from '@/components/common/preview-button';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '../common/badge';
import { Box } from '../common/box';
import { Input } from '../common/input';
import { Textarea } from '../common/textarea';
import {
  CreateSurveyPageContent,
  CreateSurveyPageHeader,
  PageContainer,
} from './create-survey-page2.styles';

const defaultText = {
  line1: '이벤트 응모에 필요한 개인정보 수집에 동의해 주세요.',
  line2:
    '- 수집 항목 : 이벤트 응모 내용(아이디/닉네임), 이름, 휴대전화번호,우편번호, 배송지\n- 수집·이용 목적 : 이벤트 당첨자 본인 확인, 경품 수령 조건 확인, 경품 지급, 의견',
  line3:
    '- 개인정보 이용 및 보유 기간: 경품 지급 완료 후 최대 6개월(지급 내용 및 관련 문의응대 완료 후 폐기)',
  line4:
    '*개인정보의 수집 및 이용에 대한 동의를 거부할 수 있으며, 이 경우 이벤트 참여가 어렵습니다.',
};

const defaultFields = ['연락처', '아이디', '이름', '주소'];

export const CreateSurveyPageStep2 = () => {
  const router = useNavigate();

  const [text, setText] = useState<{
    line1: string;
    line2: string;
    line3: string;
    line4: string;
  }>(defaultText);
  const [fields, setFields] = useState<string[]>(defaultFields);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setText(prevText => ({
      ...prevText,
      [name]: value,
    }));
    adjustHeight(e.target);
  };

  const adjustHeight = (textarea: HTMLTextAreaElement) => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  useEffect(() => {
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => adjustHeight(textarea));
  }, []);

  const handleFieldChange = (index: number, value: string) => {
    setFields(prevFields => {
      const newFields = [...prevFields];
      newFields[index] = value;
      return newFields;
    });
  };

  const handleAddField = () => {
    setFields(prevFields => [...prevFields, '']);
  };

  const handleRemoveField = (index: number) => {
    setFields(prevFields => prevFields.filter((_, i) => i !== index));
  };

  return (
    <PageContainer>
      <Subtitle title="설문 생성하기" onBackClick={() => router('/')} />
      <CreateSurveyPageHeader>
        <div className="progress">
          <img src={step2} style={{ width: '68px' }} alt="Step 2" />
          <PreviewButton />
        </div>
        <h1 className="header">
          수집할 참여자 정보를
          <br />
          입력해주세요
        </h1>
      </CreateSurveyPageHeader>
      <CreateSurveyPageContent>
        <Box className="box">
          <div className="box-header">
            <Badge variant="default" className="badge">
              정보 수집 동의
            </Badge>
            <span>템플릿 초기화하기</span>
          </div>
          <div className="noti">
            <p>
              수정 시 그대로 저장되어 다음 번 설문 만들 때 불러와집니다.
              <br />
              추후 6개월간 선정한 당첨자의 개인정보를 열람할 수 있습니다.
            </p>
          </div>
          <Box className="box desc-box">
            <Textarea
              className="desc"
              name="line1"
              value={text.line1}
              onInput={handleInput}
            />
            <Textarea
              className="desc"
              name="line2"
              value={text.line2}
              onInput={handleInput}
            />
            <Textarea
              className="desc strong"
              name="line3"
              value={text.line3}
              onInput={handleInput}
            />
            <Textarea
              className="desc"
              name="line4"
              value={text.line4}
              onInput={handleInput}
            />
          </Box>
        </Box>
        <Box className="box">
          <Badge variant="default" className="badge">
            개인 정보 수집
          </Badge>
          <div className="noti">
            <h2>수집할 참여자 정보를 입력해주세요</h2>
            <p>당첨자 선정을 위해 연락처는 필수로 수집해야해요</p>
          </div>
          <div className="input-container">
            {fields.map((field, index) => (
              <div key={index} className="field-row">
                <Input
                  value={field}
                  onChange={e => handleFieldChange(index, e.target.value)}
                />
                {fields.length > 1 && (
                  <img
                    src={cancelImg}
                    alt="cancel"
                    onClick={() => handleRemoveField(index)}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="add-input" onClick={handleAddField}>
            + 항목 추가 생성
          </div>
        </Box>
      </CreateSurveyPageContent>
    </PageContainer>
  );
};
