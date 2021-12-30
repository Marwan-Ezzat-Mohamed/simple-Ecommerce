import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/dashboard";

export function login(email, password) {
  return http.get();
}


