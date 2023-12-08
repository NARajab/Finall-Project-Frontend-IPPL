const getToken = () => {
  return localStorage.getItem("...");
};

export const decodeToken = () => {
  const token = getToken();
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(base64));
  } catch (error) {
    console.error("Gagal mendekode token:", error);
    return null;
  }
};
