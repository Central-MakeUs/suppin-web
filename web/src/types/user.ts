export type UserResponse = {
  code: string;
  message: string;
  data: {
    userId: string;
    name: string;
    email: string;
    phoneNumber: string;
    createdAt: string;
  };
};

export type UserInfoType = {
  userId: string;
  name: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
};
