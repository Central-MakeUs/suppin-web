import { UserInfoType } from '@/types/user';
import {
  BasicInfo,
  Id,
  Info,
  InfoContainer,
  Information,
} from './user-info.styles';

export const UserInfo = ({ user }: { user: UserInfoType }) => {
  return (
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
  );
};
