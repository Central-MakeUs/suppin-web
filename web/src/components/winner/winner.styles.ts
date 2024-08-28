import { body1Style, body3Style, head4Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import styled from 'styled-components';

export const Container = styled.div`
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

export const Container2 = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Container3 = styled.div`
  display: flex;
  gap: 23px;
  flex-direction: column;
  padding: 0px 20px;
  margin-top: 27px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.p`
  ${head4Style}
  color: ${COLORS.Main};
`;

export const Inform = styled.p`
  color: ${COLORS.Gray2};
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const ParticipantInfo = styled.p`
  ${body3Style}
  color: ${COLORS.Gray3};
`;

export const Input1 = styled.input`
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

export const Input2 = styled.input`
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

export const SettingLabel = styled.a`
  display: flex;
  align-items: center;
  ${body1Style}
  color: ${COLORS.Gray1};
`;

export const KeywordInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const AddButton = styled.button`
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
  font-weight: 600;
`;

export const HashtagsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

export const Hashtag = styled.div`
  display: flex;
  align-items: center;
  background-color: ${COLORS.Sub2};
  color: ${COLORS.Main};
  padding: 5px 10px;
  border-radius: 20px;
  gap: 10px;
  font-weight: 600;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const SubmitButton = styled.button<{ $enabled: boolean }>`
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
