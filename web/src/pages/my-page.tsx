import React, { useState } from 'react';
import { logout } from '@/services/apis/user.service';
import { Subtitle } from '@/components/common/Subtitle';
import { UserInfo } from '@/components/mypage/user-info';
import { useDeleteUser } from '@/services/queries/user.mutation';
import { useUserInfo } from '@/services/queries/user.queries';
import { body1Style, head2Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import { toast } from 'sonner';
import styled, { css } from 'styled-components';
import ChangePwd from '@/components/mypage/change-pwd';
import Terms from '@/components/mypage/terms';
import { CSSTransition } from 'react-transition-group';
import { useNavigate } from 'react-router-dom';
import user from '@/assets/btn_mypage.png';
import '@/styles/slide.css'; // 슬라이드 애니메이션 스타일
import { BarLoader } from '@/components/common/loader';
import { AskPopup } from '@/components/common/Ask_Popup';

const MyPage = () => {
  const { userInfo } = useUserInfo();
  const { deleteUserAccount, isDeleting } = useDeleteUser();

  const [showChangePwd, setShowChangePwd] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showAskPopup, setShowAskPopup] = useState(false); // AskPopup 표시 여부 상태 추가

  const navigate = useNavigate();

  const handleDelete = () => {
    setShowAskPopup(true); // AskPopup 표시
  };

  const handleLogout = async () => {
    const confirmed = window.confirm('정말로 로그아웃하시겠습니까?');
    if (confirmed) {
      try {
        await logout();
        localStorage.removeItem('token');
        navigate('/auth');
        toast.success('로그아웃 되었습니다.');
      } catch (error) {
        toast.error('로그아웃 중 오류가 발생했습니다.');
      }
    }
  };

  const handleConfirmDelete = () => {
    setShowAskPopup(false);
    deleteUserAccount();
  };

  const handleCancelDelete = () => {
    setShowAskPopup(false);
  };

  // TODO: Loading 스켈레톤 추가
  let content: React.ReactNode;
  if (userInfo.isPending) {
    content = <BarLoader />;
  } else if (userInfo.isFetching) {
    content = <BarLoader />;
  } else if (userInfo.isError) {
    content = <div>Error,,,</div>;
  } else {
    content = <UserInfo user={userInfo.data} />;
  }

  return (
    <div>
      <Subtitle title={'마이페이지'} backgroundColor={COLORS.Gray6}></Subtitle>
      <TotalContainer>
        <Container1>
          <img src={user} width="58px" alt="Profile" />
          <SubContainer>
            <Name>{userInfo.data && userInfo.data.name}</Name>
            <Type>인플루언서</Type>
          </SubContainer>
        </Container1>
        <Container2>
          {content}
          <Div onClick={() => setShowChangePwd(true)}>비밀번호 변경하기</Div>
          <Div onClick={() => setShowTerms(true)}>이용 약관 확인하기</Div>
          <Div onClick={handleDelete} disabled={isDeleting}>
            {isDeleting ? '탈퇴 중...' : '회원 탈퇴하기'}
          </Div>
          <Div onClick={handleLogout}>로그아웃</Div>

          <CSSTransition
            in={showChangePwd}
            timeout={300}
            classNames="slide"
            unmountOnExit
          >
            <ChangePwd onClose={() => setShowChangePwd(false)} />
          </CSSTransition>

          <CSSTransition
            in={showTerms}
            timeout={300}
            classNames="slide"
            unmountOnExit
          >
            <Terms onClose={() => setShowTerms(false)} />
          </CSSTransition>
        </Container2>
        <VersionContainer>버전 정보</VersionContainer>
      </TotalContainer>

      {/* 탈퇴 확인 팝업 */}
      {showAskPopup && (
        <AskPopup
          comment="정말로 탈퇴하시겠습니까?"
          text1="탈퇴하기"
          text2="취소하기"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
};

export default MyPage;

const TotalContainer = styled.div``;

const Container1 = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px;
  background-color: ${COLORS.Gray6};
`;

const SubContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 15px;
`;

const Name = styled.p`
  ${head2Style}
  color: ${COLORS.Gray1};
`;

const Type = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 18px;
  background-color: ${COLORS.Gray2};
  color: ${COLORS.white};
  font-size: 10px;
  border-radius: 2px;
`;

const Container2 = styled.div`
  padding: 0px 20px;
`;

const DivStyles = css`
  padding: 20px 0px;
  border: none;
  border-bottom: 1px solid ${COLORS.Gray5};
  background-color: transparent;
  display: flex;
  width: 100%;
  ${body1Style}
  color: ${COLORS.Gray1};
  cursor: pointer;
  &:disabled {
    color: ${COLORS.Gray4};
    cursor: not-allowed;
  }
`;

const Div = styled.button`
  ${DivStyles}
`;

const VersionContainer = styled.div`
  border-bottom: 4px solid ${COLORS.Gray6};
  border-top: 4px solid ${COLORS.Gray6};
  padding: 20px;
  ${body1Style}
  color: ${COLORS.Gray1};
`;
