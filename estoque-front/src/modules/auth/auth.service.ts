import { request } from "../../service/api";

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

export async function loginService(
      email: string,
      password: string,
): Promise<LoginResponse> {
      return await request("auth/login", {
            method: "POST",
            headers: {
                  "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
      });
}

export async function registerService(
      name: string,
      email: string,
      password: string,
): Promise<RegisterResponse> {
      return await request("auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
      });
}
