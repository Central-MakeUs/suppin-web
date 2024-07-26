import styled from 'styled-components';
import { UnderlineInput } from '../common/underLineInput';

const SubjectiveForm = () => {
  return (
    <FormContainer>
      <UnderlineInput placeholder={'질문을 입력해주세요'} />
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default SubjectiveForm;
