// src/stores/useLoginStore.ts
import { create } from 'zustand';
import { LoginState } from '@/types/HomePage';

export const useLoginStore = create<LoginState>(set => ({
  id: '',
  password: '',
  setId: id => set({ id }),
  setPassword: password => set({ password }),
}));
