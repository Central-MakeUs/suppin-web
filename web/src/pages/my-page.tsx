import backImg from '@/assets/btn_back_black.png';
import { Subtitle } from '@/components/common/Subtitle';
import { UserInfo } from '@/components/mypage/user-info';
import { useDeleteUser } from '@/services/queries/user.mutation';
import { useUserInfo } from '@/services/queries/user.queries';
import { body1Style, head2Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import { JSX } from 'react';
import styled from 'styled-components';

const MyPage = () => {
  const { userInfo } = useUserInfo();

  const { deleteUserAccount, isDeleting } = useDeleteUser();

  const handleDelete = () => {
    if (window.confirm('정말로 탈퇴하시겠습니까?')) {
      deleteUserAccount();
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
          <img src={backImg} width="58px" alt="Profile" />
          <SubContainer>
            <Name>{userInfo.data && userInfo.data.name}</Name>
            <Type>인플루언서</Type>
          </SubContainer>
        </Container1>
        <Container2>
          {/* TODO: 스켈레톤 컴포넌트 추가 */}
          {content}
          <Change>비밀번호 변경하기</Change>
          <Leave onClick={handleDelete} disabled={isDeleting}>
            {isDeleting ? '탈퇴 중...' : '회원 탈퇴하기'}
          </Leave>
          {/* <DeleteModal /> */}
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

const Change = styled.div`
  padding: 20px 0px;
  border-bottom: 1px solid ${COLORS.Gray5};
  ${body1Style}
  color: ${COLORS.Gray1};
`;
const Leave = styled.button`
  padding: 20px 0px;
  border: none;
  background: none;
  cursor: pointer;
  ${body1Style}
  color: ${COLORS.Gray1};
  &:disabled {
    color: ${COLORS.Gray4};
    cursor: not-allowed;
  }
`;
const VersionContainer = styled.div`
  border-bottom: 4px solid ${COLORS.Gray6};
  border-top: 4px solid ${COLORS.Gray6};
  padding: 20px;
  ${body1Style}
  color: ${COLORS.Gray1};
`;
