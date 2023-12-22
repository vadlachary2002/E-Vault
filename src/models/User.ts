export interface User {
  firstname: string;
  lastname: string;
  userType: string;
  gender: string;
  mobile: number;
  adhar: number;
  email: string;
  password: string;
  profileImage: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserState {
  email: string;
  isAdmin: boolean;
}
