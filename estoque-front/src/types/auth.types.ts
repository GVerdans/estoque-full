export interface JwtUser {
      id: number;
      user: string;
      email: string;
      role: string;
}

export interface LoginResponse {
      message: string;
      token: string;
      user: {
            name: string;
            email: string;
      };
}

export interface RegisterResponse {
      message: string;
      data: { user: string; email: string };
}
