import { request } from "../../service/api";
import { type DashboardResponse } from "./types/produto.types";

export async function getDashBoard(): Promise<DashboardResponse> {
      return await request("produtos/dashboard");
}
