import http from "./httpService";
import apiConfig from "../config.json";

const apiEndPoint = `${apiConfig.apiUrl}api/reservations`;

export function makeReservation(userId, tableId, obj) {
  return http.post(`${apiEndPoint}/${userId}/${tableId}`, obj);
}
export function getReservations() {
  return http.get(apiEndPoint);
}
export default {
  makeReservation,
  getReservations,
};
