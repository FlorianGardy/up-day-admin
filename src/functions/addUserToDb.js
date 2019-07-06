import Axios from "axios";

export const addUserToDb = (name, password, email, role) => {
  const config = {
    method: "POST",
    baseURL: "http://localhost:3030",
    url: "/users",
    data: {
      name,
      password,
      email,
      role
    }
  };
  return Axios.request(config);
};
