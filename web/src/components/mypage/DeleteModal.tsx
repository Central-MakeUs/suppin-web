import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';
import { useDeleteUser } from '@/services/queries/user.mutation';

export const DeleteModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { deleteUserAccount, isDeleting } = useDeleteUser();

  const handleDelete = () => {
    deleteUserAccount().then(() => onClose());
  };

  return (
    <>
      <Button color="danger" onPress={onOpen}>
        회원 탈퇴하기
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} backdrop="blur">
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader>정말로 탈퇴하시겠어요?</ModalHeader>
              <ModalBody>
                <p>정말로 탈퇴하시겠어요? 탈퇴 시 모든 데이터가 삭제됩니다.</p>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onPress={onClose}>
                  취소하기
                </Button>
                <Button
                  color="primary"
                  onPress={handleDelete}
                  isLoading={isDeleting}
                >
                  탈퇴하기
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
