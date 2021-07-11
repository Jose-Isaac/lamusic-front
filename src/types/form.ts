export interface signupFormField {
  name: string;
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface signinFormField {
  email: string;
  password: string;
}

export type signFormField = {
  email: string;
  password: string;
  nickname?: string;
  name?: string;
  confirmPassword?: string;
};
