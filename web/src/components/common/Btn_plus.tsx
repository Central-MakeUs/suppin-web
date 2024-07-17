import { useState } from 'react';
import styled from 'styled-components';
import btn_plus from '../../assets/btn_plus.png';
import Btn_Comment from './Btn_comment';
import Btn_Survey from './Btn_survey';

const BtnPlus = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <PlusImage src={btn_plus} alt="Plus Icon" onClick={toggleModal} />
      {isModalOpen && (
        <ModalContainer>
          <ModalButton>
            <Btn_Comment />
          </ModalButton>
          <ModalButton>
            <Btn_Survey />
          </ModalButton>
        </ModalContainer>
      )}
      {isModalOpen && <Backdrop onClick={toggleModal} />}
    </>
  );
};

export default BtnPlus;

const PlusImage = styled.img`
  width: 65px;
  height: 65px;
  position: fixed;
  bottom: 20px;
  right: 10px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  position: fixed;
  bottom: 90px; /* 플러스 버튼 위에 위치하도록 설정 */
  right: 17px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 1000;
`;

const ModalButton = styled.div`
  margin-bottom: 8px; /* 버튼 간 간격 */
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #333;
  z-index: 500;
  opacity: 90%;
`;
