import fetch from "node-fetch";
export async function fetchAPI(url, options) {
  try {
    const { method, authToken, body } = options || {};
    const headers = new Headers({
      "Content-Type": "application/json",
    });

    if (authToken) {
      headers.append("Authorization", `Bearer ${authToken}`);
    }

    const requestOptions = {
      method: method || "GET",
      headers,
      body: body ? JSON.stringify(body) : undefined,
    };

    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status} ${response.statusText}`);
    }

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    } else {
      return await response.text();
    }
  } catch (error) {
    console.error("Fetch failed:", error);
    throw error;
  }
}
