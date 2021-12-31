import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/login";

export function login(email, password) {
  return http.get(apiEndpoint + "/" + email + "/" + password);
}
