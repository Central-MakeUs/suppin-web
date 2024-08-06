import { AppDispatch, RootState } from '@/store';
import { toggleCheck } from '@/store/signup/terms';
import { body1Style, head1Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Subtitle } from '../common/Subtitle';

import { useNavigate } from 'react-router-dom';
import checkRound from '../../assets/checkRound.png';
import rightArrow from '../../assets/rigth.png';
import uncheckRound from '../../assets/uncheckRound.png';

export const SignUp1: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const checkedItems = useSelector((state: RootState) => state.terms);

  const handleCheck = (item: keyof typeof checkedItems) => {
    dispatch(toggleCheck(item));
    console.log('check됨!');
  };

  const isButtonEnabled =
    checkedItems.all ||
    (checkedItems.age && checkedItems.terms && checkedItems.privacy);

  const navigate = useNavigate();
  const handleNextClick = () => {
    if (isButtonEnabled) {
      navigate('/auth?page=2');
    }
  };
  return (
    <>
      <Subtitle title={'회원가입'}></Subtitle>
      <Container>
        <Depth>1/3</Depth>
        <H1 style={{ marginTop: '15px' }}>약관에 동의해주세요</H1>
        <Total>
          <TotalItem onClick={() => handleCheck('all')}>
            <TotalItemTop>
              <img
                src={checkedItems.all ? checkRound : uncheckRound}
                alt="check"
                width="24px"
              />
              <TotalLabel>모두 동의</TotalLabel>
            </TotalItemTop>
            <TotalItemBottom>
              <Lang>서비스 이용을 위해 아래의 약관을 모두 동의합니다.</Lang>
            </TotalItemBottom>
          </TotalItem>
        </Total>
        <TermsContainer>
          <TermItem>
            <TermContent onClick={() => handleCheck('age')}>
              <img
                src={checkedItems.age ? checkRound : uncheckRound}
                alt="check"
                width="24px"
              />
              <Label>(필수) 만 14세 이상입니다.</Label>
            </TermContent>
            <img src={rightArrow} width="18px" height="18px" />
          </TermItem>
          <TermItem>
            <TermContent onClick={() => handleCheck('terms')}>
              <img
                src={checkedItems.terms ? checkRound : uncheckRound}
                alt="check"
                width="24px"
              />
              <Label>(필수) 서비스 이용약관 동의</Label>
            </TermContent>
            <img src={rightArrow} width="18px" height="18px" />
          </TermItem>
          <TermItem>
            <TermContent onClick={() => handleCheck('privacy')}>
              <img
                src={checkedItems.privacy ? checkRound : uncheckRound}
                alt="check"
                width="24px"
              />
              <Label>(필수) 개인정보 처리방침 동의</Label>
            </TermContent>
            <img src={rightArrow} width="18px" height="18px" />
          </TermItem>
          <TermItem>
            <TermContent onClick={() => handleCheck('marketing')}>
              <img
                src={checkedItems.marketing ? checkRound : uncheckRound}
                alt="check"
                width="24px"
              />
              <Label>(선택) 마케팅 수신 동의</Label>
            </TermContent>
            <img src={rightArrow} width="18px" height="18px" />
          </TermItem>
        </TermsContainer>
        <NextButton onClick={handleNextClick} $enabled={isButtonEnabled}>
          다음으로
        </NextButton>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  /* height: 100%; */
  padding: 0px 20px;
  margin-top: 17px;
`;

const H1 = styled.p`
  ${head1Style}
  ${COLORS.Gray1}
`;

const Depth = styled.p`
  ${body1Style}
  color: ${COLORS.Main};
`;

const TermsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 18px;
`;

const TotalItem = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding-bottom: 10px;
  border-bottom: 1px solid #e5e5e5;
`;

const TotalItemTop = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TotalItemBottom = styled.div`
  margin-top: 5px;
  margin-left: 34px;
`;

const TermItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const TermContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Lang = styled.p`
  color: #787878;
  font-size: 13px;
`;

const Label = styled.span`
  ${body1Style}
  color: ${COLORS.Gray1};
`;

const TotalLabel = styled.p`
  color: ${COLORS.Gray1};
`;

const Total = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

interface NextButtonProps {
  $enabled: boolean;
}

const NextButton = styled.button<NextButtonProps>`
  width: 100%;
  padding: 10px;
  background-color: ${props => (props.$enabled ? COLORS.Main : COLORS.Gray3)};
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: ${props => (props.$enabled ? 'pointer' : 'not-allowed')};
  font-size: 16px;
  font-weight: bold;
  margin-top: 200px;
  text-align: center;
  position: sticky;
`;
