export async function fetchAPI(url, options = {}) {
  try {
    const { method = "GET", authToken, body } = options;
    
    const headers = new Headers({
      "Content-Type": "application/json",
    });

    if (authToken) {
      headers.append("Authorization", `Bearer ${authToken}`);
    }

    const requestOptions = {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    };

    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status} ${response.statusText}`);
    }

    const contentType = response.headers.get("content-type");
    return contentType && contentType.includes("application/json")
      ? await response.json()
      : await response.text();
      
  } catch (error) {
    console.error("Fetch failed:", error);
    throw error;
  }
}
