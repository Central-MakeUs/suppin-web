import { body2Style, body3Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import { useState } from 'react';
import styled from 'styled-components';

import { Popup } from '@/components/common/Popup';
import { Subtitle } from '@/components/common/Subtitle';
import { SurveyTimeInput } from '@/components/common/SurveyTimeInput';
import { SingleDatePicker } from '@/components/common/SingleDatePicker';

export const CollectCommentsPage = () => {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePathSelect = (path: string) => {
    setSelectedPath(path);
  };

  const handlePopupToggle = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <PageContainer>
      <Subtitle title="댓글 수집하기" />
      <MainContent>
        <Head>댓글 수집을 위한</Head>
        <Head>정보를 입력해주세요</Head>

        <Sub>현재까지 게시된 유튜브 댓글이 수집됩니다.</Sub>
        {/* <Label style={{ marginTop: '48px' }}>Youtube URL</Label> */}
        {/* <ButtonGroup>
          <PathButton
            active={selectedPath === 'instagram'}
            onClick={() => handlePathSelect('instagram')}
          >
            <PathButtonText>인스타그램</PathButtonText>
          </PathButton>
          <PathButton
            active={selectedPath === 'youtube'}
            onClick={() => handlePathSelect('youtube')}
          >
            <PathButtonText>유튜브</PathButtonText>
          </PathButton>
        </ButtonGroup> */}

        <Label>Youtube URL</Label>
        <Input type="text" placeholder="https://www.instagram.com/" />

        <Label>이벤트 제목</Label>
        <Input type="text" placeholder="멤피스 공연 홍보 이벤트" />

        <Label>이벤트 기간</Label>
        <SurveyTimeInput
          placeholderStart={'시작 날짜'}
          placeholderEnd={'종료 날짜'}
        />

        <Label>당첨자 발표일</Label>
        <SingleDatePicker placeholder={'날짜 선택'} />
        {/* <Input
          type="text"
          placeholder="기록용 설명"
          style={{ marginBottom: '40px' }}
        /> */}

        <ConfirmBtn>댓글 수집하기</ConfirmBtn>
      </MainContent>
      {isPopupVisible && (
        <Popup
          title="알림"
          message="설문이 완성되었어요!"
          onClose={handlePopupToggle}
        />
      )}
    </PageContainer>
  );
};

const PageContainer = styled.div``;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  padding: 0 20px;
`;

const Head = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Sub = styled.p`
  ${body2Style}
  color: ${COLORS.Gray1};
  margin-top: 6px;
`;

const Label = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${COLORS.Gray2};
  margin-bottom: 8px;
  margin-top: 22px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 5px;
`;

interface PathButtonProps {
  active?: boolean;
}

const PathButton = styled.button<PathButtonProps>`
  width: 155px;
  height: 46px;
  flex: 1;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${({ active }) => (active ? COLORS.Main : COLORS.Gray3)};
  background-color: ${({ active }) => (active ? COLORS.Sub3 : COLORS.white)};
  color: ${({ active }) => (active ? COLORS.Main : COLORS.Gray3)};
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.Sub3};
    color: ${COLORS.Main};
  }
`;

const PathButtonText = styled.p`
  ${body3Style}
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid ${COLORS.Gray5};
  border-radius: 10px;
  background-color: ${COLORS.Gray6};
  font-size: 16px;
  color: ${COLORS.Gray1};
`;

const ConfirmBtn = styled.button`
  width: 100%;
  background-color: ${COLORS.Main};
  height: 46px;
  border: none;
  color: white;
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
`;
