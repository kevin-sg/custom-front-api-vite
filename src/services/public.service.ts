import axios from "axios";

import type { FormState, IPeople } from "../models";

const CUSTOM_API = import.meta.env.VITE_APP_CUSTOM_API_GHIBLI;

export function createPeople(data: FormState) {
  return axios.post<IPeople>(`${CUSTOM_API}/people`, data);
}
