import { request } from "../../service/api";

export interface LoginResponse {
      message: string;
      token: string;
      user: {
            name: string;
            email: string;
      };
}

export async function loginService(
      email: string,
      password: string,
): Promise<LoginResponse> {
      return await request("auth/login", {
            method: "POST",
            headers: {
                  "Content-type": "application/json",
            },
            body: JSON.stringify({ email, password }),
      });
}
