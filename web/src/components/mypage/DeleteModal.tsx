import { useDeleteUser } from '@/services/queries/user.mutation';

export const DeleteModal = () => {
  const { deleteUserAccount, isDeleting } = useDeleteUser();

  const handleDelete = () => {
    deleteUserAccount().then(() => onClose());
  };

  return (
    <>
      <div>탈퇴</div>
    </>
  );
};
