export async function vanGetCall() {
  try {
    const response = await fetch("/api/vans");
    if(!response.ok){
        throw {
            message: "Failed to fetch vans",
            statusText: response.statusText,
            status: response.status
        }
    }
    const result = await response.json();
    return result.vans;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}
