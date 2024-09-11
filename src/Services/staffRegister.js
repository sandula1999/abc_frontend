import http from "./httpService";
import apiConfig from "../config.json";

const apiEndPoint = `${apiConfig.apiUrl}api/staff/register`;

export function staffRegister(obj) {
  return http.post(apiEndPoint, obj);
}
export default {
  staffRegister,
};
