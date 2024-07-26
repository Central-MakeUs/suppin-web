import { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '@/theme';
import { body5Style } from '@/styles/global-styles';
import Button from '../common/Btn_btns';

const SurveyForm = ({ selectedOption, setSelectedOption, onRemove }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <Container>
        <DropdownHeader onClick={toggleDropdown}>
          <SelectedOption>{selectedOption}</SelectedOption>
          <Arrow isOpen={isOpen}>&#9662;</Arrow>
        </DropdownHeader>
        <Button onClick={onRemove} $variant={'delete'} width="24px"></Button>
      </Container>
      {isOpen && (
        <DropdownList>
          <DropdownItem onClick={() => handleOptionClick('주관식')}>
            <Font>주관식</Font>
          </DropdownItem>
          <DropdownItem onClick={() => handleOptionClick('객관식 (단일 선택)')}>
            <Font>객관식 (단일 선택)</Font>
          </DropdownItem>
          <DropdownItem onClick={() => handleOptionClick('객관식 (복수 선택)')}>
            <Font>객관식 (복수 선택)</Font>
          </DropdownItem>
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  width: 100%;
  height: 32px;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid ${COLORS.Gray3};
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  width: 132px;
`;

const SelectedOption = styled.span`
  ${body5Style}
  color: ${COLORS.Main};
`;

const Arrow = styled.span<{ isOpen: boolean }>`
  transition: transform 0.3s;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const DropdownList = styled.ul`
  position: absolute;
  width: 100%;
  top: 45px;
  left: 0;
  background-color: white;
  border: 1px solid ${COLORS.Gray3};
  border-radius: 10px;
  padding: 0;
  margin: 0;
  list-style: none;
  z-index: 1000;
`;

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.Gray2};
  }
`;

const Font = styled.p`
  ${body5Style}
  color: ${COLORS.Main};
`;

export default SurveyForm;
