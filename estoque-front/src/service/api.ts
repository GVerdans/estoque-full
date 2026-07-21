export async function request(endpoint: string, options?: RequestInit) {
      const response = await fetch(
            `${import.meta.env.VITE_API_URL}${endpoint}`,
            options,
      );

      const data = await response.json();

      if (!response.ok) {
            throw new Error(data.message);
      }

      return data;
}
