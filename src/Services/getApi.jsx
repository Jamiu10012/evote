export const fetchData = async (token) => {
  try {
    const response = await fetch(
      "https://evote-fq0h.onrender.com/evote/api/v1/auth/get-user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchElectionData = async (token) => {
  try {
    const response = await fetch(
      "https://evote-fq0h.onrender.com/evote/api/v1/election",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
