import { logout } from '@/services/apis/user.service';
import { Subtitle } from '@/components/common/Subtitle';
import { UserInfo } from '@/components/mypage/user-info';
import { useDeleteUser } from '@/services/queries/user.mutation';
import { useUserInfo } from '@/services/queries/user.queries';
import { body1Style, head2Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import { JSX, useState } from 'react';
import { toast } from 'sonner';
import styled, { css } from 'styled-components';
import ChangePwd from '@/components/auth/change-pwd';
import { CSSTransition } from 'react-transition-group';
import { useNavigate } from 'react-router-dom';
import user from '@/assets/btn_mypage.png';
import '@/styles/slide.css'; // 슬라이드 애니메이션 스타일

const MyPage = () => {
  const { userInfo } = useUserInfo();

  const { deleteUserAccount, isDeleting } = useDeleteUser();
  const [showChangePwd, setShowChangePwd] = useState(false);

  const navigate = useNavigate();
  const handleDelete = () => {
    if (window.confirm('정말로 탈퇴하시겠습니까?')) {
      deleteUserAccount();
    }
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

  // TODO: Loading 스켈레톤 추가
  let content: JSX.Element;
  if (userInfo.isPending) {
    content = <div>Loading,,,</div>;
  } else if (userInfo.isFetching) {
    content = <div>Loading,,,</div>;
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
          {/* TODO: 스켈레톤 컴포넌트 추가 */}
          {content}
          <Div onClick={() => setShowChangePwd(true)}>비밀번호 변경하기</Div>
          <Div>이용 약관 확인하기</Div>
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
        </Container2>
        <VersionContainer>버전 정보</VersionContainer>
      </TotalContainer>
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
