import type { ApiResponse } from "@/types/lead";

const BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

if (!BASE_URL) {
  console.warn("[api] VITE_API_BASE_URL is not set. Requests will fail.");
}

const HEADERS = { "Content-Type": "application/json" };

/** Map any non-2xx fetch response to a normalised ApiResponse. */
async function parseResponse<TData>(res: Response): Promise<ApiResponse<TData>> {
  try {
    const json = (await res.json()) as ApiResponse<TData>;
    return json;
  } catch {
    return {
      success: false,
      message: `Server error (${res.status}).`,
      data: null,
      errors: null,
      statusCode: res.status,
    };
  }
}

/** POST to a backend endpoint. Never throws — always returns ApiResponse. */
export async function apiPost<TBody, TData = null>(
  path: string,
  body: TBody
): Promise<ApiResponse<TData>> {
  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(body),
    });
    return parseResponse<TData>(res);
  } catch {
    return {
      success: false,
      message: "Network error. Please check your connection and try again.",
      data: null,
      errors: null,
      statusCode: 0,
    };
  }
}

/** GET from a backend endpoint. Never throws — always returns ApiResponse. */
export async function apiGet<TData = null>(
  path: string
): Promise<ApiResponse<TData>> {
  try {
    const res = await fetch(`${BASE_URL}${path}`, { headers: HEADERS });
    return parseResponse<TData>(res);
  } catch {
    return {
      success: false,
      message: "Network error. Please check your connection and try again.",
      data: null,
      errors: null,
      statusCode: 0,
    };
  }
}
