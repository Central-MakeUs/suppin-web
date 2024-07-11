// src/types/LoginState.ts
export interface LoginState {
  id: string;
  password: string;
  setId: (id: string) => void;
  setPassword: (password: string) => void;
}
