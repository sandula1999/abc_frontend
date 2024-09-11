import http from "./httpService";
import apiConfig from "../config.json";

const apiEndPoint = `${apiConfig.apiUrl}api/users/register`;

export function customerRegister(obj) {
  return http.post(apiEndPoint, obj);
}
export default {
  customerRegister,
};
