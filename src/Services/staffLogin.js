import http from "./httpService";
import apiConfig from "../config.json";

const apiEndPoint = `${apiConfig.apiUrl}api/staff/login`;

export function staffLogin(username, password) {
  return http.post(`${apiEndPoint}?userName=${username}&password=${password}`);
}
export default {
  staffLogin,
};
