import Axios from "axios";

export default function getUserFromApi() {
  return Axios.get("http://localhost:3030/users").then(res => res.data);
}
