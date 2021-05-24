const baseUrl = "https://angela-ezhe-backend.herokuapp.com";
// const baseUrl = "http://localhost:2000";

export const api = `${baseUrl}/api`;
export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
