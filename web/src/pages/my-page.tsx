import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '@/services/apis/user.service';
import { Subtitle } from '@/components/common/Subtitle';
import { body1Style, head2Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import styled from 'styled-components';
import btn_mypage from '../assets/btn_mypage.png';
import { useDeleteUser } from '@/services/queries/user.mutation';
import { DeleteModal } from '@/components/mypage/DeleteModal';

const MyPage = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
  });

  const { deleteUserAccount, isDeleting } = useDeleteUser();

  const handleDelete = () => {
    if (window.confirm('정말로 탈퇴하시겠습니까?')) {
      deleteUserAccount();
    }
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>정보를 불러오는데 실패했습니다!</div>;
  }

  const user = data.data;

  return (
    <div>
      <Subtitle title={'마이페이지'} backgroundColor={COLORS.Gray6}></Subtitle>
      <TotalContainer>
        <Container1>
          <img src={btn_mypage} width="58px" alt="Profile"></img>
          <SubContainer>
            <Name>{user.name}</Name>
            <Type>인플루언서</Type>
          </SubContainer>
        </Container1>
        <Container2>
          <Information>
            <BasicInfo>기본 정보</BasicInfo>
            <InfoContainer>
              <Info>아이디</Info>
              <Id>{user.userId}</Id>
            </InfoContainer>
            <InfoContainer>
              <Info>휴대폰</Info>
              <Id>{user.phoneNumber}</Id>
            </InfoContainer>
            <InfoContainer>
              <Info>이메일</Info>
              <Id>{user.email}</Id>
            </InfoContainer>
          </Information>
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
const Information = styled.div`
  ${body1Style}
  color: ${COLORS.Gray1};
  border-bottom: 1px solid ${COLORS.Gray5};
  padding: 30px 0px 30px 0px;
`;

const BasicInfo = styled.div`
  margin-bottom: 20px;
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 27px;

  a {
    text-decoration: none; /* 밑줄 제거 */
  }
`;
const Info = styled.p`
  ${body1Style}
  color: ${COLORS.Gray2};
`;

const Id = styled.a`
  color: ${COLORS.Gray2};
  text-decoration: none;
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
