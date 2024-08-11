import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '@/store';
import { COLORS } from '@/theme';
import { Button } from '../common/button';
import { SurveyTimeInput } from '../common/SurveyTimeInput';
import { head4Style, body3Style, body1Style } from '@/styles/global-styles';
import {
  setParticipantCount,
  setMinCharacterCount,
  addKeyword,
  removeKeyword,
  setWinners,
  setWinnerCount,
} from '@/store/winner';
import { setStartDate, setEndDate } from '@/store/comment';
import { draftWinners } from '@/services/apis/crawling.service';
import { toast } from 'sonner';

interface WinnerContentProps {
  onWinnerSelected: () => void; // 콜백 프로퍼티 추가
}

export const WinnerContent = ({ onWinnerSelected }: WinnerContentProps) => {
  const dispatch = useDispatch();

  // Redux 상태에서 startDate와 endDate를 가져옴
  const startDate = useSelector((state: RootState) => state.dates.startDate);
  const endDate = useSelector((state: RootState) => state.dates.endDate);

  const { participantCount, minCharacterCount, keywords } = useSelector(
    (state: RootState) => state.winner
  );

  const [inputValue, setInputValue] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    if (
      participantCount.trim() !== '' &&
      minCharacterCount.trim() !== '' &&
      startDate.trim() !== '' &&
      endDate.trim() !== '' &&
      keywords.length > 0
    ) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [participantCount, minCharacterCount, startDate, endDate, keywords]);

  const handleAddKeyword = () => {
    if (inputValue.trim() !== '') {
      dispatch(addKeyword(inputValue.trim()));
      setInputValue('');
    }
  };

  const handleRemoveKeyword = (index: number) => {
    dispatch(removeKeyword(index));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    if (!isButtonEnabled) {
      toast.error('모든 필드를 입력해주세요.');
      return;
    }

    const payload = {
      eventId: 1, // 실제 이벤트 ID를 여기에 설정
      winnerCount: parseInt(participantCount, 10),
      minLength: parseInt(minCharacterCount, 10),
      startDate,
      endDate,
      keywords,
    };

    console.log(payload);

    try {
      const response = await draftWinners(payload);
      console.log(response);

      if (response.data.winners.length > 0) {
        dispatch(setWinners(response.data.winners)); // 당첨자 데이터를 Redux에 저장
        dispatch(setWinnerCount(response.data.winners.length)); // 당첨자 데이터를 Redux에 저장
        dispatch(setStartDate(startDate));
        dispatch(setEndDate(endDate));
        toast.success(
          // `당첨자 ${response.data.winners.length}명이 추첨되었습니다!`
          `당첨자 선정이 완료되었습니다`
        );
        onWinnerSelected(); // 콜백 호출
      } else {
        toast.error(
          '키워드가 포함된 댓글이 조회되지 않았습니다! 키워드 설정을 다시 해주세요!'
        );
      }
    } catch (error) {
      toast.error('당첨자 추첨에 실패했습니다.');
    }
  };

  return (
    <>
      <Container>
        <Container2>
          <Label>당첨자 수</Label>
          <ParticipantInfo>참여자 300</ParticipantInfo>
        </Container2>
        <Input1
          placeholder="당첨자 수를 입력해주세요"
          value={participantCount}
          onChange={e => {
            dispatch(setParticipantCount(e.target.value));
          }}
        />
      </Container>
      <Container3>
        <Section>
          <SettingLabel>기간 설정</SettingLabel>
          <Inform>
            특정 날짜에 응답한 참여자 중 당첨자를 선정할 수 있어요.
          </Inform>
          <SurveyTimeInput
            placeholderStart={'날짜 선택'}
            placeholderEnd={'날짜 선택'}
          />
        </Section>

        <Section>
          <SettingLabel>최소 글자수</SettingLabel>
          <Inform>
            정성어린 응답의 기준이 되는 최소 글자수를 입력해 주세요.
          </Inform>
          <Input2
            placeholder="글자 수를 입력해주세요"
            value={minCharacterCount}
            onChange={e => {
              dispatch(setMinCharacterCount(e.target.value));
            }}
          />
        </Section>

        <Section>
          <SettingLabel>키워드 설정</SettingLabel>
          <Inform>주관식에서 포함되길 바라는 키워드를 입력해 주세요.</Inform>
          <KeywordInputWrapper>
            <Input2
              placeholder="키워드를 입력해주세요"
              value={inputValue}
              onChange={handleInputChange}
            />
            <AddButton onClick={handleAddKeyword}>추가</AddButton>
          </KeywordInputWrapper>
          <HashtagsContainer>
            {keywords.map((tag, index) => (
              <Hashtag key={index}>
                # {tag}
                <Button
                  variant="delete"
                  width="20px"
                  height="20px"
                  onClick={() => handleRemoveKeyword(index)}
                />
              </Hashtag>
            ))}
          </HashtagsContainer>
        </Section>
      </Container3>

      <BtnContainer>
        <SubmitButton
          disabled={!isButtonEnabled}
          $enabled={isButtonEnabled}
          onClick={handleSubmit}
        >
          랜덤 추천하기
        </SubmitButton>
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
  padding: 30px 20px;
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
  padding: 0px 20px;
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

const Inform = styled.p`
  color: ${COLORS.Gray2};
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 8px;
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
  border-radius: 10px;
  background-color: ${COLORS.Gray6};
  color: ${COLORS.Gray1};
  font-size: 14px;
  outline: none;

  ::placeholder {
    color: ${COLORS.Gray4};
  }
`;

const SettingLabel = styled.a`
  display: flex;
  align-items: center;
  ${body1Style}
  color: ${COLORS.Gray1};
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

const SubmitButton = styled.button<{ $enabled: boolean }>`
  width: 350px;
  height: 50px;
  padding: 15px;
  background-color: ${({ $enabled }) =>
    $enabled ? COLORS.Main : COLORS.Gray3};
  color: ${COLORS.white};
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: ${({ $enabled }) => ($enabled ? 'pointer' : 'not-allowed')};
`;

export default WinnerContent;
