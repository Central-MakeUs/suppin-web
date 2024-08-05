import { body3Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import { useState } from 'react';
import styled from 'styled-components';

import { Btn_popup } from '@/components/common/Btn_popup';
import { Popup } from '@/components/common/Popup';
import { Subtitle } from '@/components/common/Subtitle';
import { SurveyTimeInput } from '@/components/common/SurveyTimeInput';

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

        <Label style={{ marginTop: '48px' }}>댓글 수집 경로</Label>
        <ButtonGroup>
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
        </ButtonGroup>

        <Label>URL</Label>
        <Input type="text" placeholder="https://www.instagram.com/" />

        <Label>이벤트 제목</Label>
        <Input type="text" placeholder="멤피스 공연 홍보 이벤트" />

        <Label>이벤트 기간</Label>
        <SurveyTimeInput placeholderStart={''} placeholderEnd={''} />

        <Label>당첨자 선정 기간</Label>
        <Input
          type="text"
          placeholder="기록용 설명"
          style={{ marginBottom: '40px' }}
        />

        <Btn_popup onClick={handlePopupToggle} />
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
  border: 1px solid ${COLORS.Gray3};
  border-radius: 10px;
  background-color: ${COLORS.Gray5};
  font-size: 16px;
  color: ${COLORS.Gray2};
`;
