import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../common/Btn_btns';
import { UnderlineInput } from '../common/underLineInput';
import { COLORS } from '@/theme';

const ObjectiveSingleForm = ({ onRemove }) => {
  const [question, setQuestion] = useState<string>('');
  const [options, setOptions] = useState<string[]>(['']);

  const addOption = () => {
    setOptions([...options, '']);
  };

  const removeOption = (index: number) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  return (
    <FormContainer>
      <UnderlineInput
        value={question}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuestion(e.target.value)
        }
        placeholder="질문을 입력해주세요"
        fontSize="16px"
      />
      {options.map((option, index) => (
        <OptionContainer key={index}>
          <OptionInputContainer>
            <OptionInput
              value={option}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const newOptions = [...options];
                newOptions[index] = e.target.value;
                setOptions(newOptions);
              }}
              placeholder="선택지의 내용을 입력해주세요"
            />
            <ButtonContainer onClick={() => removeOption(index)}>
              <Button $variant={'delete'} width="24px" height="24px" />
            </ButtonContainer>
          </OptionInputContainer>
        </OptionContainer>
      ))}
      <AddOptionButtonContainer>
        <AddOptionButton onClick={addOption}>
          + 선택지 추가 생성
        </AddOptionButton>
      </AddOptionButtonContainer>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const OptionInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

const OptionInput = styled.input`
  padding: 10px;
  border: 1px solid ${COLORS.Gray4};
  border-radius: 10px;
  padding-right: 40px;
  background-color: #f6f7f8;
  color: #f6f7f8;
  width: 314px;
  height: 46px;
  color: #0f1114;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;
const AddOptionButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const AddOptionButton = styled.p`
  background-color: transparent;
  text-decoration: underline;
  color: ${COLORS.Gray2};
  font-size: 14px;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;

export default ObjectiveSingleForm;
