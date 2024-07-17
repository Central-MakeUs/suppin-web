import { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '@/theme';
import { body5Style } from '@/styles/global-styles';

export const SurveyForm = () => {
  const [selectedOption, setSelectedOption] = useState('주관식');
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
      <DropdownHeader onClick={toggleDropdown}>
        <SelectedOption>{selectedOption}</SelectedOption>
        <Arrow isOpen={isOpen}>&#9662;</Arrow>
      </DropdownHeader>
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
  width: 132px;
  height: 32px;
  position: relative;
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
