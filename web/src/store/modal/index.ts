import { ModalState } from '@/types/modal';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ModalState = {
  type: null,
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    onOpen(state) {
      state.isOpen = true;
    },
    onClose(state) {
      state.isOpen = false;
    },
  },
});

export const { onClose, onOpen } = modalSlice.actions;
export default modalSlice.reducer;
