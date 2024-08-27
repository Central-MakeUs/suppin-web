import cancelImg from '@/assets/cancel.svg';
import step2 from '@/assets/step2.png';
import {
  CreateSurveyPageContent,
  CreateSurveyPageHeader,
  PageContainer,
} from '@/components/Survey/create-survey-page2.styles';
import { Subtitle } from '@/components/common/Subtitle';
import { PreviewButton } from '@/components/common/preview-button';
import { setFields, setPolicy } from '@/store/survey';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Badge } from '../common/badge';
import { Box } from '../common/box';
import { Button } from '../common/button';
import { Input } from '../common/input';
import { Textarea } from '../common/textarea';

const defaultText = {
  line1: '이벤트 응모에 필요한 개인정보 수집에 동의해 주세요.',
  line2:
    '- 수집 항목 : 이벤트 응모 내용(아이디/닉네임), 이름, 휴대전화번호,우편번호, 배송지\n- 수집·이용 목적 : 이벤트 당첨자 본인 확인, 경품 수령 조건 확인, 경품 지급, 의견',
  line3:
    '- 개인정보 이용 및 보유 기간: 경품 지급 완료 후 최대 6개월(지급 내용 및 관련 문의응대 완료 후 폐기)',
  line4:
    '*개인정보의 수집 및 이용에 대한 동의를 거부할 수 있으며, 이 경우 이벤트 참여가 어렵습니다.',
};

const defaultFields = [
  { optionName: '연락처' },
  { optionName: '아이디' },
  { optionName: '이름' },
  { optionName: '주소' },
];

export const CreateSurveyPageStep2 = () => {
  const router = useNavigate();
  const dispatch = useDispatch();

  const [text, setText] = useState<{
    line1: string;
    line2: string;
    line3: string;
    line4: string;
  }>(defaultText);
  const [fields, setLocalFields] =
    useState<{ optionName: string }[]>(defaultFields);

  const textHtml = `
    <div>
      <p>${text.line1}</p>
      <p>${text.line2}</p>
      <p><strong>${text.line3}</strong></p>
      <p>${text.line4}</p>
    </div>
  `;

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
    if (index < 1) return;
    setLocalFields(prevFields => {
      const newFields = [...prevFields];
      newFields[index].optionName = value;
      return newFields;
    });
  };

  const handleAddField = () => {
    if (fields.length === 10) {
      toast.error('개인정보 수집 항목은 최대 10개입니다.');
      return;
    }
    setLocalFields(prevFields => [...prevFields, { optionName: '' }]);
  };

  const handleRemoveField = (index: number) => {
    if (index < 1) return;
    setLocalFields(prevFields => prevFields.filter((_, i) => i !== index));
  };

  const saveHandler = () => {
    if (fields.filter(item => item.optionName.trim().length === 0).length > 0) {
      toast.error('빈 항목을 추가할 수 없습니다.');
      return;
    }

    const filteredFields = fields.filter(
      field =>
        !defaultFields.some(
          defaultField => defaultField.optionName === field.optionName
        )
    );

    dispatch(setPolicy(textHtml));
    dispatch(setFields(filteredFields));
    router('/survey/new?step=3');
  };

  const previewHandler = () => {
    sessionStorage.setItem('policy', textHtml);
    sessionStorage.setItem('personal', JSON.stringify(fields));
  };

  return (
    <PageContainer>
      <Subtitle title="설문 생성하기" onBackClick={() => router('/')} />
      <CreateSurveyPageHeader>
        <div className="progress">
          <img src={step2} style={{ width: '68px' }} alt="Step 2" />
          <PreviewButton onClick={previewHandler} />
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
            {/* <span>템플릿 초기화하기</span> */}
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
                {field.optionName === '이름' ? (
                  <div className="name">
                    <Input
                      value={field.optionName}
                      onChange={e => handleFieldChange(index, e.target.value)}
                    />
                    <span>수집한 아이디는 응답 내용과 함께 보여져요</span>
                  </div>
                ) : (
                  <Input
                    value={field.optionName}
                    onChange={e => handleFieldChange(index, e.target.value)}
                  />
                )}
                {index > 0 && fields.length > 1 && (
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
        <Button
          type="button"
          onClick={saveHandler}
          variant="add"
          className="button"
        >
          다음으로
        </Button>
      </CreateSurveyPageContent>
    </PageContainer>
  );
};
