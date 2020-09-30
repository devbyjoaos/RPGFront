
export class LoginDto {
  nickname: string;
  password: string;

}

export class Tokens {
  token: string;
  refreshToken: string;
}

export class UserInfo {
  id: number;
  nickname: string;
  email: string;
  name: string;
}

export class LoginInfo {
  tokens: Tokens;
  userInfo: UserInfo;
}

export class RegisterDto{
  email: string;
  name: string;
  nickname: string;
  password: string;
}
