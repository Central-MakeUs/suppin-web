import { draftWinners } from '@/services/apis/crawling.service';
import { RootState } from '@/store';
import { setEndDate, setStartDate } from '@/store/comment';
import {
  addKeyword,
  removeKeyword,
  setMinCharacterCount,
  setParticipantCount,
  setWinnerCount,
  setWinners,
} from '@/store/winner';
import { Label } from '@radix-ui/react-label';
import { Container, Section } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import { Button } from '../common/button';
import { SurveyTimeInput } from '../common/SurveyTimeInput';
import {
  AddButton,
  BtnContainer,
  Container2,
  Container3,
  Hashtag,
  HashtagsContainer,
  Inform,
  Input1,
  Input2,
  KeywordInputWrapper,
  ParticipantInfo,
  SettingLabel,
  SubmitButton,
} from './winner.styles';

interface WinnerContentProps {
  onWinnerSelected: () => void; // 당첨자 선택 시 호출되는 함수
  participantCount: number; // 참여자 수
}

export const WinnerContent = ({
  participantCount,
  onWinnerSelected,
}: WinnerContentProps) => {
  const dispatch = useDispatch(); // Redux의 dispatch 함수를 사용하기 위해 선언

  const startDate = useSelector((state: RootState) => state.dates.startDate); // 시작 날짜를 가져옴
  const endDate = useSelector((state: RootState) => state.dates.endDate); // 종료 날짜를 가져옴

  const { participant, minCharacterCount, keywords } = useSelector(
    (state: RootState) => state.winner
  ); // 참여자, 최소 글자 수, 키워드 목록을 가져옴

  const [inputValue, setInputValue] = useState(''); // 입력 필드의 상태를 관리
  const [isButtonEnabled, setIsButtonEnabled] = useState(false); // 버튼 활성화 여부를 관리

  // 모든 필드가 입력되었는지 확인하고 버튼 활성화 여부를 설정
  useEffect(() => {
    if (
      participant.trim() !== ''
      // minCharacterCount.trim() !== '' &&
      // (startDate ?? '').trim() !== '' &&
      // (endDate ?? '').trim() !== '' &&
      // keywords.length > 0
    ) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [participant, minCharacterCount, startDate, endDate, keywords]);

  // 키워드를 추가하는 함수
  const handleAddKeyword = () => {
    if (inputValue.trim() !== '') {
      dispatch(addKeyword(inputValue.trim())); // Redux 상태에 키워드를 추가
      setInputValue(''); // 입력 필드를 초기화
    }
  };

  // 키워드를 제거하는 함수
  const handleRemoveKeyword = (index: number) => {
    dispatch(removeKeyword(index)); // Redux 상태에서 키워드를 제거
  };

  // 입력 필드의 상태를 업데이트하는 함수
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const eventId = localStorage.getItem('eventId'); // 로컬 스토리지에서 이벤트 ID를 가져옴

  // 추첨 버튼 클릭 시 호출되는 함수
  const handleSubmit = async () => {
    if (!isButtonEnabled) {
      toast.error('모든 필드를 입력해주세요.'); // 모든 필드가 입력되지 않았을 경우 경고 메시지 표시
      return;
    }

    const numericEventId = eventId ? parseInt(eventId, 10) : null; // 이벤트 ID를 숫자로 변환
    const payload = {
      eventId: numericEventId!,
      winnerCount: parseInt(participant, 10),
      minLength: parseInt(minCharacterCount, 10),
      startDate: startDate || '',
      endDate: endDate || '',
      keywords,
    };

    try {
      const data = await draftWinners(payload); // 추첨 API를 호출
      console.log(data);

      if (data.data.winners.length > 0) {
        dispatch(setWinners(data.data.winners)); // 당첨자 목록을 Redux 상태에 저장
        dispatch(setWinnerCount(data.data.winners.length)); // 당첨자 수를 Redux 상태에 저장
        dispatch(setStartDate(startDate)); // 시작 날짜를 Redux 상태에 저장
        dispatch(setEndDate(endDate)); // 종료 날짜를 Redux 상태에 저장
        toast.success('당첨자 선정이 완료되었습니다'); // 성공 메시지 표시
        onWinnerSelected(); // 당첨자 선택 시 호출되는 함수 실행
      } else {
        toast.error(
          '키워드가 포함된 댓글이 조회되지 않았습니다! 키워드 설정을 다시 해주세요!'
        ); // 키워드가 포함된 댓글이 없을 경우 경고 메시지 표시
      }
    } catch (error) {
      console.error(error);
      toast.error('당첨자 추첨 요청 중 오류가 발생했습니다.'); // 에러 발생 시 경고 메시지 표시
    }
  };

  return (
    <>
      <Container>
        <Container2>
          <Label>당첨자 수</Label>
          <ParticipantInfo>참여자 {participantCount}</ParticipantInfo>{' '}
          {/* 참여자 수 표시 */}
        </Container2>
        <Input1
          placeholder="당첨자 수를 입력해주세요"
          value={participant}
          onChange={e => {
            dispatch(setParticipantCount(e.target.value)); // 참여자 수를 설정
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
              dispatch(setMinCharacterCount(e.target.value)); // 최소 글자 수를 설정
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
            <AddButton onClick={handleAddKeyword}>추가</AddButton>{' '}
            {/* 키워드 추가 버튼 */}
          </KeywordInputWrapper>
          <HashtagsContainer>
            {keywords.map((tag, index) => (
              <Hashtag key={index}>
                # {tag}
                <Button
                  variant="delete"
                  width="20px"
                  height="20px"
                  onClick={() => handleRemoveKeyword(index)} // 키워드 제거 버튼
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
          onClick={handleSubmit} // 추첨 버튼 클릭 시 호출되는 함수
        >
          랜덤 추첨하기
        </SubmitButton>
      </BtnContainer>
    </>
  );
};

export default WinnerContent;
