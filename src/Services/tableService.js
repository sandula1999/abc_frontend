import http from "./httpService";
import apiConfig from "../config.json";

const apiEndPoint = `${apiConfig.apiUrl}api/tables`;

export function getTables() {
  return http.get(apiEndPoint);
}
export function updateTable(id, obj) {
    console.log(`${apiEndPoint}/${id}`);
    
  return http.put(`${apiEndPoint}/${id}`, obj);
}
export default {
  getTables,
};
