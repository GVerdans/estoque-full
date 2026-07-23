import { request } from "../../service/api";
import type { LoginResponse, RegisterResponse } from "../../types/auth.types";

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
